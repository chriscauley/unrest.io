import { format } from 'date-fns'

import create from '../element/create'
import Input from './Input'
import config from './config'

class DateTimeInput extends Input {
  default_tag = 'ur-datetime'

  _createInput() {
    let date_value, time_value
    if (this.value) {
      const dt = new Date(this.value)
      date_value = format(dt, 'YYYY-MM-DD')
      time_value = format(dt, 'HH:mm')
    }
    const attrs = {
      className: this.css.input,
      parent: this.tag.root,
    }
    setTimeout(() => (this._date_input.value = date_value), 2000)
    this._date_input = create('input', {
      type: 'date',
      value: date_value,
      ...attrs,
    })
    this._time_input = create('input', {
      type: 'time',
      value: time_value,
      ...attrs,
    })
  }

  _get_value() {
    const str = this._date_input.value + ' ' + this._time_input.value
    return new Date(str).valueOf()
  }

  bindTag(tag) {
    this.tag = tag
    tag.input = this
    this._createInput()
    this.bindEvents(this._date_input)
    this.bindEvents(this._time_input)
    this._checkValidity()
  }
}

export default DateTimeInput
config.type2class['datetime'] = DateTimeInput
