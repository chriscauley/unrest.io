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
import Controller from './Controller'
import './tags'

Object.assign(uR, {
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
})

if (typeof window !== undefined) {
  if (window.__HMR_SKIP) {
    window.location.reload()
  }
  window.__HMR_SKIP = true
}

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
