import _ from 'lodash'
import db from "./index"

const assert = (bool, exception) => {
  if (!bool) {
    throw exception
  }
}

const ForeignKey = (model, opts = {}) => {
  const field = Field(undefined, opts)
  db.ready(() => {
    if (typeof model === 'string') {
      model = _.get(db, model)
    }
    /*field.deserialize = (pk,json) => {
      if (json[field.name + '_id']) {
        pk = json[field.name + '_id']
      }
      return model.objects.get(pk)
    }*/
  })
  Object.assign(field, {
    deserialize: (pk, json) => {
      if (json[field.name + '_id']) {
        return json[field.name + '_id']
      }
      return pk
    },
    serialize: (obj = field) => obj,
  })
  return field
}

const DateTime = (opts = {}) => {
  const initial = (opts.auto_now_add || opts.auto_now)?new Date().valueOf():undefined
  const field = Field(initial,opts)
  return Object.assign(field, {
    type: 'datetime',
    serialize: value => (value && value.valueOf)?value.valueOf():value,
  })
}

const Time = (initial,opts = {}) => {
  const field = Field(initial,opts)
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
  opts.required && // defaults to true!
    field.validators.push(v =>
      assert(!_.isNil(v), `ValueError: ${field} is required`),
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

const List = type => {
  let deserialize = list => list
  if (typeof type === 'function') {
    deserialize = list => list.map(item => new type(item))
  }
  return {
    serialize: list =>
      list.map(item =>
        _.isFunction(item.serialize) ? item.serialize() : item,
      ),
    deserialize,
  }
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