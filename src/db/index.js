import ready from './ready'
import register from './register'
import APIManager from "./APIManager"
import BaseManager from "./BaseManager"
import StorageManager from "./StorageManager"
import Model from "./Model"
import * as fields from "./fields"
import unslugify, { camel2SpaceCase } from '../schema/unslugify'

const db = {
  ready,
  register,
  APIManager,
  BaseManager,
  StorageManager,
  Model,
  fields,
  apps: [],
  REQUIRED: {},
  ...fields,
  getModel: model => {
    if (typeof model === 'string') {
      model = db[model]
    }
    return model
  }
}

register.db = db

export default db