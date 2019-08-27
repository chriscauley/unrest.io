import _ from 'lodash'
import register from './register'
import { TYPES } from "./fields"

const notNil = _.negate(_.isNil)

class Model {
  //static fields = { id: 0 } // defines the data structure to be serialized
  //manager = // Storage class to be used for instances

  constructor(opts) {
    this.opts = opts // maybe move this.opts and this.fields into this.META?
    this.makeOpts(opts)
    this.makeMeta()
    this.deserialize(opts)
  }

  makeOpts(opts) {
    this.constructor.__makeOpts()
    for (const [key, default_value] of Object.entries(this.constructor.BASE_OPTS)) {
      this[key] = opts[key] === undefined ? default_value : opts[key]
    }
  }

  getFields() {
    return this.META.fields
  }

  makeMeta() {
    this.constructor.__makeMeta()
    this.META = this.constructor.META
  }

  static __makeOpts() {
    if (this.hasOwnProperty('BASE_OPTS')) {
      return // only execute once!
    }
    this.BASE_OPTS = { ...this.opts }
    let cls = this
    while (cls !== Model) {
      cls = Object.getPrototypeOf(cls)
      if (cls.opts) {
        Object.entries(cls.opts).forEach(([key,value]) => {
          if (!this.BASE_OPTS.hasOwnProperty(key)) {
            this.BASE_OPTS[key] = value
          }
        })
      }
    }
  }

  static __makeMeta() {
    // this is for model level setup (eg primitives to fields or adding manager)
    if (this.hasOwnProperty('META')) {
      return // only execute once!
    }
    this.META = {}
    let cls = this
    let manager = this.manager
    register(this)
    const fieldsets = [cls.fields]
    while (cls !== Model) {
      cls = Object.getPrototypeOf(cls)
      if (cls.hasOwnProperty('fields')) {
        fieldsets.push(cls.fields)
      }
      manager = manager || cls.manager
    }
    const fields = (this.META.fields = new Map(
      Object.entries(_.defaults(
        {},
        manager && manager.fields,
        ..._.reverse(fieldsets),
      )),
    ))
    fields.forEach((field, name) => {
      let _type = typeof field
      if (_type !== 'object') {
        // pass
      } else if (Array.isArray(field)) {
        _type = 'array'
      }
      const type = TYPES[_type]

      // primitives are lazily coerced
      if (type) {
        fields.set(name, (field = type(field)))
      }
      field.name = name
      field.model = this
    })

    if (manager && !this.objects) {
      this.objects = new manager(this)
    }
    this.prototype.toString = function() {
      return this.__str__()
    }
  }

  deserialize(json = {}) {
    this.META.fields.forEach((field, name) => {
      let value = json[name]
      if (!json.hasOwnProperty(name)) {
        value = field.initial
      }
      if (typeof value === 'function') {
        value = value()
      }
      if (field.deserialize) {
        this[name] = field.deserialize(value, json, this)
      } else if (typeof field === 'function') {
        // this is not a 100% accurate test for when to use new
        // https://stackoverflow.com/a/40922715
        // maybe check if object is a subclass of uR.Object?
        this[name] = field.prototype
          ? new field(this, value)
          : field(this, value)
      } else {
        this[name] = value
      }
    })
  }

  serialize(keys = [...this.META.fields.keys()]) {
    const json = _.pick(this, keys)
    Object.keys(json).forEach(key => {
      const field = this.META.fields.get(key)
      json[key] = field.serialize(json[key])
    })
    return _.pickBy(json, notNil)
  }
  getFieldnames() {
    return this.constructor.editable_fieldnames || []
  }
  __str__() {
    return `[${this.constructor.model_name} #${this.id}]`
  }
}
Model.opts = {} // non-data initialization options
export default Model
