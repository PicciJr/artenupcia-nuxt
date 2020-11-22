import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5de2a816 = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _79f4618e = () => interopDefault(import('../pages/contacto-exito.vue' /* webpackChunkName: "pages/contacto-exito" */))
const _3b707359 = () => interopDefault(import('../pages/cookies.vue' /* webpackChunkName: "pages/cookies" */))
const _52853a5c = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _63e6b9bb = () => interopDefault(import('../pages/error-ruta.vue' /* webpackChunkName: "pages/error-ruta" */))
const _17a1f8a2 = () => interopDefault(import('../pages/nuestros-trabajos/index.vue' /* webpackChunkName: "pages/nuestros-trabajos/index" */))
const _a7b3c5d2 = () => interopDefault(import('../pages/politica-privacidad.vue' /* webpackChunkName: "pages/politica-privacidad" */))
const _211ea1cc = () => interopDefault(import('../pages/nuestros-trabajos/_id/index.vue' /* webpackChunkName: "pages/nuestros-trabajos/_id/index" */))
const _da1176c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _138f12ae = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacto",
    component: _5de2a816,
    name: "contacto"
  }, {
    path: "/contacto-exito",
    component: _79f4618e,
    name: "contacto-exito"
  }, {
    path: "/cookies",
    component: _3b707359,
    name: "cookies"
  }, {
    path: "/error",
    component: _52853a5c,
    name: "error"
  }, {
    path: "/error-ruta",
    component: _63e6b9bb,
    name: "error-ruta"
  }, {
    path: "/nuestros-trabajos",
    component: _17a1f8a2,
    name: "nuestros-trabajos"
  }, {
    path: "/politica-privacidad",
    component: _a7b3c5d2,
    name: "politica-privacidad"
  }, {
    path: "/nuestros-trabajos/:id",
    component: _211ea1cc,
    name: "nuestros-trabajos-id"
  }, {
    path: "/",
    component: _da1176c8,
    name: "index"
  }, {
    path: "/*",
    component: _138f12ae,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
