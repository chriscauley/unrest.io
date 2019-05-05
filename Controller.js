import _ from 'lodash'
import db from './db'

const actions = [
  'mouseover', 'mouseout', 'mousemove',
  'mouseclick', 'mouseup', 'mousedown',
  'mousewheel',
  'keydown', 'keyup',
]

export default class Controller extends db.Model {
  static slug = "unrest.Controller"
  static opts = {
    parent: db.REQUIRED, // html element to bind to
    target: db.REQUIRED, // object being controlled
    is_keyboard: true,
  }
  constructor(opts) {
    super(opts)
    this.bound_actions = []
    this.bindKeys()
  }
  bindKeys() {
    const { parent } = this

    // make parent focusable
    parent.tabIndex = parent.tabIndex || "0"
    parent.focus()

    actions.filter(action => this.target[action])
      .forEach( action => {
        const func = e => this.target[action](e)
        this.bound_actions.push([action, func])
        parent.addEventListener(action, func)
      })
  }
  unmount = () => {
    const { parent } = this
    this.bound_actions.forEach(([action, func]) => {
      parent.removeEventListener(action, func)
    })
  }
}
