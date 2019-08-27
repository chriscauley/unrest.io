import _ from "lodash"

import config from './config'
import icon from './icon'

export default {
  init: function(opts) {
    this.css = _.cloneDeep(config)
    Object.assign(
      this,
      _.pick(this.css,this.css.mixin_attrs),
      { icon },
    )
  }
}