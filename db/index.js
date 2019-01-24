import Ready from '../ready'
import APIManager from "./APIManager"
import BaseManager from "./BaseManager"
import Model from "./Model"
import * as fields from "./fields"
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
  if (!db[app_label]) {
    db[app_label] = {
      verbose_name: unslugify(app_label || "main"),
      name: app_label,
      _models: [],
    }
    db.apps.push(db[app_label])
  }
  return db[app_label]
}

const register = model => {
  _nameAppAndModel(model)

  let { app_label, model_name, slug } = model
  const app = _getOrCreateApp(app_label)

  // assign model to app and uR.db
  db[slug] = app[model_name] = model
  app._models.push(model)

  // human readable string e.g. "BlogPost" => "Blog Post"
  model.verbose_name = model.verbose_name || camel2SpaceCase(model_name)
}

const db = {
  ready: Ready(),
  register,
  APIManager,
  BaseManager,
  Model,
  fields,
  apps: [],
  ...fields,
}

export default db