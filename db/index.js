import Ready from '../ready'
import Manager from "./Manager"
import Model from "./Model"
import * as fields from "./fields"

const register = model => {
  const { app_label, model_name } = model
  if (!db[app_label]) {
    db[app_label] = {}
  }
  db[app_label][model_name] = model
  db[`${app_label}.${model_name}`] = model
}

const db = {
  ready: Ready(),
  register,
  Manager,
  Model,
  fields,
  ...fields,
}

export default db