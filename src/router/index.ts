import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "layout" */ '@c/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/data/user/index.vue')
      },
      {
        path: '/zb',
        name: 'zb',
        component: () => import(/* webpackChunkName: "zb" */ '../views/data/zb/index.vue')
      }
    ]
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
