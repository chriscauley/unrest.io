import Model from './Model'

export default class BaseManager {
  constructor(model) {
    this.model = model
    model.manager = model.manager || this.constructor
    model.objects = this
    this.model.__makeMeta()
    this.refresh()
  }

  create = (data={}) => {
    data = this.normalize(data)
    const obj = new this.model(data)
    return this.set(obj)
  }

  normalize(data) {
    Object.entries(data).forEach(([key,value]) => {
      // this is just for foreign key
      // maybe the Model constructor could serialize it first?
      if (value instanceof Model) {
        data[key] = value.id
      }
    })
    if (typeof data.serialize === 'function') {
      data = data.serialize()
    }
    return data
  }

  save = obj => {
    console.warn("Manager.save should be renamed to set")
    return this.set(obj)
  }

  set = obj => {
    this._set(obj)
    return Promise.resolve(obj)
  }

  _set = obj => {
    if (!(obj instanceof this.model)) {
      obj = new this.model(obj)
    }
    if (!obj.id) {
      throw "Object cannot be set without id"
    }
    this.items.set(obj.id, obj)
    return obj
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
