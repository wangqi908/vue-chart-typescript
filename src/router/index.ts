import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  }
]

const { BASE_DIR } = require('../../config')
const base = process.env.NODE_ENV === 'production' ? `/${BASE_DIR}` : '/'

const router = new VueRouter({
  mode: 'history',
  base,
  routes
})

export default router
