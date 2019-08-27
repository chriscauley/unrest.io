console.log(1)
import hash from 'object-hash'
import admin from './admin'
import ajax from './ajax'
import auth from './auth'
import Controller from './Controller'
import css from './css'
import db from './db'
import element from './element'
import form from './form'
import router from './router'
import Ready from './ready'
import schema from './schema'
import storage from './storage'
import './tags'

const uR = {
  ready: Ready(),
  Ready,
  Controller,
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
  Date: Date,
  TrueDate: Date,
}

if (typeof window !== undefined) {
  window.onload = uR.ready.start
  if (window.__HMR_SKIP) {
    window.location.reload()
  }
  window.__HMR_SKIP = true

  uR.ready.then(() => {
    if (typeof document !== 'undefined') {
      const scripts = [...document.querySelectorAll('script')].map(s => s.src)
      uR.SCRIPT_HASH = hash(scripts)
    }
    uR.db.ready.start()
    uR.db.ready.then(() => {
      uR.auth.reset()
      uR.auth.ready(
        uR.router.ready.start
      )
    })
  })
}

export default uR

