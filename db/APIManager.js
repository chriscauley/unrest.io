import ajax from '../ajax'
import db from './index'
import BaseManager from './BaseManager'

export default class APIManager extends BaseManager {
  create = data => {
    this.normalize(data)

    // #! TODO should be db.ready.block or db.ready.ajax
    db.ready.stop()
    return ajax({
      url: this._get_base_url(),
      method: 'POST',
      data: data,
    })
      .then(data => {
        const obj = this._set(data)
        db.ready.start() //#! TODO
        return obj
      })
  }

  refresh() {
    // #! TODO should be db.ready.block or db.ready.ajax
    db.ready.stop()
    return ajax(this._get_base_url())
      .then(response => {
        this.pagination = response.pagination
        this.items = new Map()
        response.results.forEach(this._set)
      })
      .then(db.ready.start) //#! TODO
  }

  _get_base_url() {
    const { app_label, model_name } = this.model
    return `/api/${app_label}/${model_name}/`
  }
}
