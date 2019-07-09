import _ from 'lodash'
import db from "./index"

const assert = (bool, exception) => {
  if (!bool) {
    throw exception
  }
}

const ForeignKey = (fk_model, opts = {}) => {
  const field = Field(undefined, opts)
  db.ready(() => {
    if (typeof fk_model === 'string') {
      fk_model = field.fk_model = _.get(db, fk_model)
    }
    const setFK = (obj,fk_obj) => {
      obj[field.name+"_id"] = fk_obj.id
      obj[field.name] = fk_obj
      return fk_obj
    }
    field.deserialize = (pk, json, obj) => {
      if (pk instanceof fk_model) {
        return setFK(obj,pk)
      }
      let fk_obj
      if (!pk && json[field.name + '_id']) {
        pk = json[field.name + '_id']
      } else if (pk && pk.id) {
        // it's an actual instance
        fk_obj = pk
        pk = pk.id
      }
      if (pk && !fk_obj) {
        fk_obj = fk_model.objects.get(pk)
      }
      return fk_obj && setFK(obj,fk_obj)
    }
  })
  Object.assign(field, {
    type: "foreignkey",
    fk_model,
    deserialize: (pk, json, obj) => {
      db.ready(() => {
        field.deserialize(pk, json, obj)
      })
      return pk
    },
    serialize: obj => {
      if (typeof obj === "string") {
        return parseInt(obj)
      }
      if (typeof obj === "number") {
        return obj
      }
      return obj && obj.id
    }
  })
  return field
}

const DateTime = (opts = {}) => {
  const now = () => new Date().valueOf()
  const initial = (opts.auto_now_add || opts.auto_now)?now:undefined
  const field = Field(initial, opts)
  return Object.assign(field, {
    type: 'datetime',
    serialize: value => {
      if (typeof value === "string") {
        return new Date(value).valueOf()
      }
      return (value && value.valueOf)?value.valueOf():value
    }
  })
}

const Time = (initial, opts = {}) => {
  const field = Field(initial,opts)
  field.type = 'time'
  return field
}

const Field = (initial, opts = {}) => {
  const field = {
    initial,
    serialize: v => {
      v = field.coerce(v)
      // validators will throw errors for invalid values
      field.validators.forEach(f => f(v))
      return v
    },
    validators: [],
    coerce: v => v,
    toString: () => `${field.model.name}.${field.name}`,
    model: {}, // set by __makeMeta on an Model
    deserialize: v => v,
    type: opts.type,
    required: opts.required || opts.required === undefined,
    ...opts,
  }
  field.required && // defaults to true!
    field.validators.push(
      v => assert(!_.isNil(v), `ValueError: ${field} is required`),
    )
  return field
}

const Int = (initial, opts = {}) => {
  opts.type = 'int'
  const field = Field(initial, opts)

  field.validators.push(v => {
    if (_.isNil(v)) {
      return // this will be caught by required validator
    }
    assert(!isNaN(v), `ValueError: ${field} requires a number`)
  })

  field.coerce = v => (typeof v === 'string' ? Number(v) : v)

  return field
}

const String = (initial, opts = {}) => {
  opts.type = 'string'
  const field = Field(initial, opts)
  field.validators.push(v => {
    if (_.isNil(v) || v === '') {
      return // this will be caught by required validator
    }
    assert(
      typeof v === 'string',
      `ValueError: ${field} requires a string not ${v}`,
    )
  })
  return field
}

const _Number = Int
const Boolean = (initial, opts = {}) => {
  opts.type = 'boolean'
  opts.coerce = v => v && v !== 'false'
  const field = Field(initial, opts)
  return field
}

const List = (type, opts = {}) => {
  let deserialize = list => list
  if (typeof type === 'function') {
    deserialize = list => (list || []).map(item => new type(item))
  }
  return Field([],{
    type: 'list',
    serialize: list =>
      (list || []).map(
        item => _.isFunction(item.serialize) ? item.serialize() : item,
      ),
    deserialize,
    ...opts,
  })
}

const TYPES = {
  number: _Number,
  string: String,
  boolean: Boolean,
  array: List,
}

export {
  TYPES,
  _Number as Number,
  List,
  Boolean,
  Field,
  Int,
  ForeignKey,
  String,
  DateTime,
  Time,
}