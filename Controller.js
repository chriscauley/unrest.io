import _ from 'lodash'
import db from './db'

export default class Controller extends db.Model {
  static slug = "unrest.Controller"
  static opts = {
    parent: db.REQUIRED, // html element to bind to
    target: db.REQUIRED, // object being controlled
    is_keyboard: true,
  }
  constructor(opts) {
    super(opts)
    this.bindKeys()
  }
  bindKeys() {
    const { parent } = this

    // make parent focusable
    parent.tabIndex = parent.tabIndex || "0"
    parent.focus()

    const actions = [
      'mouseover', 'mouseout', 'mousemove',
      'mouseclick', 'mouseup', 'mousedown',
      'mousewheel',
      'keydown', 'keyup',
    ]
    actions.forEach( action => {
      this.target[action] && parent.addEventListener(action,(e) => this.target[action](e));
    })
  }
}
