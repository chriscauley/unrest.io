import _ from 'lodash'
import riot from 'riot'

//import config from './config'
import schema from '../schema'
import config from './config'
import Input from './Input'
import Select from './Select'

const getCls = opts => {
  // config will be used here eventually
  if (opts.type === 'boolean') {
    opts.choices = [['false', 'No'], ['true', 'Yes']]
  }
  if (config.type2class[opts.type]) {
    return config.type2class[opts.type]
  }
  if (opts.choices) {
    return Select
  }
  return Input
}

export default {
  prepOpts: function() {
    const { matches } = this.opts
    if (matches && uR.db[matches[1]]) {
      this.opts.model = uR.db[matches[1]]
      this.opts.object = this.opts.model.objects.get(matches[2])
    }
  },
  init: function() {
    this.prepOpts()
    this.inputs = []
    window.uR._latest_form = this
    _.defaults(this.opts, {
      success_text: 'Submit',
      cancel_text: 'Cancel',
      prefix: '',
    })

    _.assign(this, {
      title: this.opts.title,
      addInputs: (opts = this.opts) => {
        const { object, model, _schema } = opts
        let fields, fieldnames, submit
        if (object) {
          opts.initial = object.serialize()
          fields = new Map([...object.META.fields])
          fieldnames = object.constructor.editable_fieldnames || []
          submit = () => {
            Object.assign(object,this.getData())
            if (model) {
              model.objects.create({
                ...object.serialize(),
              })
            }
            this.unmount()
            riot.update()
          }
        } else if (model) {
          model.__makeMeta()
          fields = new Map([...model.META.fields])
          fieldnames = model.editable_fieldnames || []
          submit = () => {
            new opts.model(this.getData())
            this.unmount()
            riot.update()
          }
        } else if (_schema) {
          throw 'NotImplemented: Schema to form coming soon'
        } else {
          throw 'ValueError: <ur-form> requires a schema, constructor, or object'
        }

        // called by tag when form is submitted
        opts.submit = opts.submit || submit

        // pre-process and create the inputs
        Array.from(fields)
          .filter(([name, _obj]) => fieldnames.indexOf(name) !== -1)
          .map(schema.prep) // #! TODO is this necessary for Object/Model or just raw schema
          .forEach(this.addInput)
      },
      addInput: field => {
        // converts a schema field to input options
        const opts = {
          tagName: 'ur-input',
          label: schema.unslugify(field.name),
          id: `${this.prefix || ''}__${field.name}`,
        }
        _.assign(opts, field)
        if (this.opts.initial) {
          opts.initial = this.opts.initial[opts.name]
        }
        const cls = getCls(opts)
        this.inputs.push(new cls(opts))
      },

      checkValidity: () => {
        // form is valid if there are no invalid inputs
        this.valid = !this.inputs.filter(f => !f.valid).length
        return this.valid
      },

      getData() {
        const result = {}
        this.inputs.forEach(f => (result[f.name] = f.value))
        return result
      },
    })

    this.addInputs(this.opts)
  },
}
