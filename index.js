import hash from 'object-hash'
import Ready from './ready'

const uR = {
  ready: Ready(),
  Ready,
}

if (typeof window !== 'undefined') {
  window.onload = uR.ready.start
  window.uR = uR
}

export default uR

import element from './element'
import schema from './schema'
import form from './form'
import css from './css'
import router from './router'
import ajax from './ajax'
import auth from './auth'
import storage from './storage'
import db from './db'
import admin from './admin'
import './tags'

Object.assign(uR, {
  element,
  schema,
  form,
  css,
  router,
  ajax,
  auth,
  storage,
  db,
  admin,
  Date: window.Date,
  TrueDate: window.Date,
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
