import Ready from '../ready'
import Manager from "./Manager"
import obj from "./Object"

const db = {
  ready: Ready(),
}

export default {
  ready: Ready(),
  Manager,
  ...obj,
}
