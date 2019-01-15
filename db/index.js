import Ready from '../ready'
import Manager from "./Manager"
import Model from "./Model"
import * as fields from "./fields"
import unslugify from '../schema/unslugify'

const register = model => {
  const { app_label, model_name } = model
  if (!db[app_label]) {
    db[app_label] = {
      verbose_name: unslugify(app_label),
      name: app_label,
      _models: [],
    }
    db.apps.push(db[app_label])
  }
  db[app_label][model_name] = model
  db[app_label]._models.push(model)
  db[`${app_label}.${model_name}`] = model
  model.verbose_name = model.verbose_name || unslugify(model_name)
}

const db = {
  ready: Ready(),
  register,
  Manager,
  Model,
  fields,
  apps: [],
  ...fields,
}

export default db