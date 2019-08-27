import _ from 'lodash'
import config from './config'
import Mixin from './Mixin'

export default {
  init(opts) {
    this.mixin(Mixin)
    if (opts.ur_modal) {
      this.theme = this.css.modal
    } else {
      this.theme = this.css[opts.theme || "default"]
    }

    if (opts.ur_modal) {
      if (opts.cancel) {
        this.one('unmount', opts.cancel)
      }
      const mask = document.createElement('div')
      mask.className = this.theme.mask
      mask.addEventListener('click',() => this.unmount())
      this.root.appendChild(mask)
    }

    this.theme.root &&
      this.theme.root.split(' ').forEach(c => this.root.classList.add(c))
  },
}
