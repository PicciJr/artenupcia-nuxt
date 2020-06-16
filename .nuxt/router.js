import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _375d9328 = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _0029442c = () => interopDefault(import('../pages/contacto-exito.vue' /* webpackChunkName: "pages/contacto-exito" */))
const _0b5c007f = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _7218a02e = () => interopDefault(import('../pages/error-ruta.vue' /* webpackChunkName: "pages/error-ruta" */))
const _11371fc8 = () => interopDefault(import('../pages/nuestros-trabajos/index.vue' /* webpackChunkName: "pages/nuestros-trabajos/index" */))
const _48101d07 = () => interopDefault(import('../pages/nuestros-trabajos/_id/index.vue' /* webpackChunkName: "pages/nuestros-trabajos/_id/index" */))
const _70d43b6e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _05faf2d6 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

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
    component: _375d9328,
    name: "contacto"
  }, {
    path: "/contacto-exito",
    component: _0029442c,
    name: "contacto-exito"
  }, {
    path: "/error",
    component: _0b5c007f,
    name: "error"
  }, {
    path: "/error-ruta",
    component: _7218a02e,
    name: "error-ruta"
  }, {
    path: "/nuestros-trabajos",
    component: _11371fc8,
    name: "nuestros-trabajos"
  }, {
    path: "/nuestros-trabajos/:id?",
    component: _48101d07,
    name: "nuestros-trabajos-id"
  }, {
    path: "/",
    component: _70d43b6e,
    name: "index"
  }, {
    path: "/*",
    component: _05faf2d6,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
