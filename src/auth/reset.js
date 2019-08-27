import auth from './config'
import ajax from '../ajax'

export default () => {
  if (!auth.enabled) {
    // assume a dummy user
    auth.setUser({
      username: "TEST USER",
      email: "anon@example.com",
      id: -1,
      is_superuser:true,
    })
    auth.ready.start()
    if (auth.user && auth.AUTH_SUCCESS) {
      auth.AUTH_SUCCESS()
      auth.AUTH_SUCCESS = undefined
    }
    return true
  }
  auth.setUser() // removes current user
  return ajax({
    url: auth.urls.reset,
  }).then(data => {
    auth.setUser(data.user)
    auth.ready.start()

    // #! TODO use riot observable so uR.auth.one vs uR.auth.on can control removing event
    if (auth.user && auth.AUTH_SUCCESS) {
      auth.AUTH_SUCCESS()
      auth.AUTH_SUCCESS = undefined
    }
  })
}
