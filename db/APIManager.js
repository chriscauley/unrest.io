import ajax from '../ajax'
import db from './index'
import BaseManager from './BaseManager'

export default class Manager extends BaseManager {
  create = data => ajax({
    url: this._get_base_url(),
    method: 'POST',
    data: data,
  }).then(this.set)

  refresh() {
    // #! TODO should be db.ready.block or db.ready.ajax
    db.ready.stop()
    ajax(this._get_base_url())
      .then(response => {
        this.pagination = response.pagination
        this.items = new Map()
        response.results.forEach(this.set)
      })
      .then(db.ready.start)
  }

  _get_base_url() {
    const { app_label, model_name } = this.model
    return `/api/${app_label}/${model_name}/`
  }
}
