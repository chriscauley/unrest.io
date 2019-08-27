import ajax from '../ajax'
import ready from './ready'
import BaseManager from './BaseManager'

export default class APIManager extends BaseManager {
  create = data => {
    data = this.normalize(data)

    // #! TODO should be ready.block or ready.ajax
    ready.stop()
    return ajax({
      url: this._get_base_url(),
      method: 'POST',
      data: data,
    })
      .then(data => {
        const obj = this._set(data)
        ready.start() //#! TODO
        return obj
      })
  }

  refresh() {
    // #! TODO should be ready.block or ready.ajax
    ready.stop()
    return ajax(this._get_base_url())
      .then(response => {
        this.pagination = response.pagination
        this.items = new Map()
        response.results.forEach(this._set)
      })
      .then(ready.start) //#! TODO
  }

  _get_base_url() {
    const { app_label, model_name } = this.model
    return `/api/${app_label}/${model_name}/`
  }
}
