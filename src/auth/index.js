import auth from './config'

//#! TODO should routes.add and the urls be in a separate file?
import router from '../router'
import ajax from '../ajax'
import './ur-auth.tag'
import loginRequired from './loginRequired'
import setUser from './setUser'
import reset from './reset'

auth.ready(() => {
  let register = router.routeElement('ur-auth-register')
  if (auth.FAST_REGISTER) {
    register = () => {
      ajax(auth.urls.register_ajax).then(auth.reset)
    }
  }
  router.add({
    [auth.urls.start + '$']: router.routeElement('ur-auth-start'),
    [auth.urls.login]: router.routeElement('ur-auth-login'),
    [auth.urls.register]: register,
    [auth.urls.logout]: () => {
      ajax({url: auth.urls.logout_ajax, method: 'POST'}).then(() => {
        uR.router.route("#")
        window.location.reload()
      })
    }
  })
})

Object.assign(auth, {
  loginRequired,
  setUser,
  reset,
  enabled: true,
  FAST_REGISTER: true,
})

export default auth
