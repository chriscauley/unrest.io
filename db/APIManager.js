import ajax from '../ajax'
import db from './index'
import BaseManager from './BaseManager'

export default class APIManager extends BaseManager {
  create = data => {
    // #! TODO should be db.ready.block or db.ready.ajax
    db.ready.stop()
    Object.entries(data).forEach(([key,value]) => {
      // this is just for foreign key
      // maybe the Model should constructor could serialize it first?
      if (value instanceof db.Model) {
        data[key] = value.id
      }
    })
    return ajax({
      url: this._get_base_url(),
      method: 'POST',
      data: data,
    })
      .then(this.set)
      .then(db.ready.start) //#! TODO
  }

  refresh() {
    // #! TODO should be db.ready.block or db.ready.ajax
    db.ready.stop()
    return ajax(this._get_base_url())
      .then(response => {
        this.pagination = response.pagination
        this.items = new Map()
        response.results.forEach(this.set)
      })
      .then(db.ready.start) //#! TODO
  }

  _get_base_url() {
    const { app_label, model_name } = this.model
    return `/api/${app_label}/${model_name}/`
  }
}
