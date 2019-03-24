import { pick } from 'lodash'

import prepChoices from '../schema/prepChoices'
import create from '../element/create'
import Input from './Input'

export default class Checkboxes extends Input {
  constructor(opts) {
    opts.tagName = 'ur-checkboxes'
    super(opts)
    this.choices = prepChoices(this)
    this.input_type = 'checkbox'
    window.C = this
  }

  createInput() {
    return 
  }
  bindEvents() {
    this.tag.on("mount",() => {
      this._getInputs().forEach(i => {
        i.checked = this.value.includes(i.value)
        super.bindEvents(i)
      })
    })
  }
  _getInputs() {
    return [...this.tag.root.querySelectorAll('input')]
  }
  _get_value() {
    return this._getInputs()
      .filter(i => i.checked)
      .map(i => i.value)
  }
}
