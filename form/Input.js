import _ from 'lodash'

import config from './config'
import css from '../css'
import create from '../element/create'

// html attributes from opts
class Input {
  ATTRS = ['name', 'id', 'placeholder', 'required', 'minlength', 'value']
  default_tag = 'ur-input'

  constructor(opts) {
    _.defaults(this, opts, {
      tagName: this.default_tag,
      input_tagname: 'input',
      input_type: opts.type,
      validators: [],
      coerce: v => v,
      value: opts.initial,

      //#! TODO: this is because spectre isn't playing nice
      // remove this and then look at an empty, requierd inupt.
      placeholder: ' ',
    })
    this.css = {
      label: css.form.label,
      field: css.form.field + ' ur-' + opts.type,
      input: css.form.input,
    }
    this._updateCss()
  }

  _updateCss() {
    this.css.error = {
      [css.error]: true,
      [css.hide]: this.valid || !this.show_error,
    }
  }

  _createInput() {
    const attrs = _.pick(this, this.ATTRS)

    attrs.type = this.input_type
    attrs.parent = this.tag.root
    attrs.className = this.css.input
    this._input = create(this.input_tagname, _.omitBy(attrs, _.isNil))
  }

  bindTag(tag) {
    this.tag = tag
    tag.input = this
    this._createInput()
    this.bindEvents(this._input)
    this._checkValidity()
  }

  _checkValidity(value = this.value) {
    this.valid = false

    try {
      // this is valid if no validator throws an exception
      this.validators.forEach(f => f(value))
      this.valid = true
      this.error = undefined
      this.show_error = true
    } catch (error) {
      this.error = error
    }

    return this.valid
  }

  _get_value() {
    return this.coerce(this._input.value)
  }

  bindEvents(input) {
    const EVENTS = ['change', 'focus', 'keyup', 'keydown']

    EVENTS.forEach(name => {
      input.addEventListener(name, _event => {
        const new_value = this._get_value()
        if (this.value !== new_value) {
          this.value = new_value
          this._checkValidity()
          this._updateCss()
          this.tag.parent.update()
        }
      })
    })
    input.addEventListener('blur', _event => {
      this.show_error = true
      this._updateCss()
      this.tag.parent.update()
    })
  }

  focus() {}
  keydown() {}
  keyup() {}
  change() {}
  blur() {}
}

config.tag2class['ur-input'] = Input
export default Input
