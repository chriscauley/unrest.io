import unslugify, { camel2SpaceCase } from '../schema/unslugify'

const _nameAppAndModel = model => {
  if (model.slug) {
    [model.app_label, model.model_name] =  model.slug.split(".")
  } else if (model.app_label && model.model_name) {
    model.slug = `${model.app_label}.${model.model_name}`
  } else {
    throw `Model "${model.name}" needs app_label and model_name or a slug`
  }
}

const _getOrCreateApp = app_label => {
  if (!register.db[app_label]) {
    register.db[app_label] = {
      verbose_name: unslugify(app_label || "main"),
      name: app_label,
      _models: [],
    }
    register.db.apps.push(register.db[app_label])
  }
  return register.db[app_label]
}

const register = model => {
  _nameAppAndModel(model)

  const { app_label, model_name, slug } = model
  const app = _getOrCreateApp(app_label)

  // assign model to app and uR.register.db
  register.db[slug] = app[model_name] = model
  app._models.push(model)

  // human readable string e.g. "BlogPost" => "Blog Post"
  model.verbose_name = model.verbose_name || camel2SpaceCase(model_name)
}

export default register