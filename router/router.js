import Ready from '../ready'
import riot from 'riot'

const router = {
  _routes: {},
  do404: () => {
    throw 'NotImplemented'
  }, // #! TODO
  MODAL_PREFIX: /^#!/,
  ready: Ready(),
  add: new_routes => Object.assign(router._routes, new_routes),
}
riot.observable(router)
export default router
