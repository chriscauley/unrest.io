import hash from 'object-hash'

const uR = {}
export default uR

import Ready from './ready'
import element from './element'
import schema from './schema'
import form from './form'
import css from './css'
import router from './router'
import ajax from './ajax'
import auth from './auth'
import storage from './storage'
import db from './db'

Object.assign(uR, {
  ready: Ready(),
  Ready,
  element,
  schema,
  form,
  css,
  router,
  ajax,
  auth,
  storage,
  db,
})

uR.ready.then(() => {
  if (typeof document !== 'undefined') {
    const scripts = [...document.querySelectorAll('script')].map(s => s.src)
    uR.SCRIPT_HASH = hash(scripts)
  }
  uR.db.ready.start()
  uR.db.ready.then(() => {
    uR.auth.reset()
    uR.router.ready.start()
  })
})

if (typeof window !== 'undefined') {
  window.onload = uR.ready.start
  window.uR = uR
}

