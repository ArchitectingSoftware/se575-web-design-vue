import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

import LayoutView from '@/views/LayoutView.vue'
import DynamicView from '@/views/DynamicView.vue'
import WebServicesView from '@/views/WebServicesView.vue'
import AppWebState from '@/views/AppWebState.vue'
import BcDemoView from '@/views/BcDemoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: LayoutView
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: DynamicView
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import(/* webpackChunkName: "props" */ '../views/ParentChild.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue')
  },
  {
    path: '/webservices',
    name: 'WebServices',
    component: WebServicesView
  },
  {
    path: '/web_state',
    name: 'WebState',
    component: AppWebState
  },
  {
    path: '/simple_state',
    name: 'SimpleState',
    component: () => import(/* webpackChunkName: "state" */ '../views/AppSimpleState.vue')
  },
  {
    path: '/bc_demo',
    name: 'BcDemo',
    component: BcDemoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
