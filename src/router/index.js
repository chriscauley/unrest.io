import onClick from './onClick'
import resolve from './resolve'
import route from './route'
import routeElement from './routeElement'
import router from './router'
import clearHash from './clearHash'

Object.assign(router, {
  route,
  routeElement,
  resolve,
  clearHash,
})

router.ready(() => {
  document.addEventListener('click', onClick)

  // if router has not been activated, trigger for current location
  !router._stale && router.route(window.location.href)
  window.addEventListener('hashchange', () => {
    let path = window.location.pathname
    if (window.location.hash) {
      path += "#"+window.location.hash
    }
    // #! TODO this is needed so you can manuall change the hash
    // but I can't get it to not break the general router behavior
    // such as #/abc/ => /arst/ ends up going to /
    //route(path)
  })
})

export default router
