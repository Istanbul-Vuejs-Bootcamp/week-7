import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c012180 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _60e0aa72 = () => interopDefault(import('../pages/dynamic.vue' /* webpackChunkName: "pages/dynamic" */))
const _e88e0776 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _6c012180,
    name: "about"
  }, {
    path: "/dynamic",
    component: _60e0aa72,
    name: "dynamic"
  }, {
    path: "/",
    component: _e88e0776,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
