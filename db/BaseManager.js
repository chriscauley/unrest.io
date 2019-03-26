import db from '../db'

export default class BaseManager {
  constructor(model) {
    this.model = model
    this.refresh()
  }

  create = (data={}) => {
    this.normalize(data)
    const obj = new this.model(data)
    return this.save(obj)
  }

  normalize(data) {
    Object.entries(data).forEach(([key,value]) => {
      // this is just for foreign key
      // maybe the Model constructor could serialize it first?
      if (value instanceof db.Model) {
        data[key] = value.id
      }
    })
  }

  save = obj => {
    this._set(obj)
    return Promise.resolve(obj)
  }

  _set = obj => {
    this.items.set(obj.id, obj)
  }

  all() {
    return [...this.items.values()]
  }

  filter(opts) {
    let results = this.all()
    if (typeof opts === 'function') {
      return results.filter(opts)
    }
    Object.entries(opts).forEach(([key,value]) => {
      results = results.filter(r => r[key] === value)
    })
    return results
  }

  refresh() {
    this.items = new Map()
  }

  get(id) {
    return this.items.get(parseInt(id))
  }
}
