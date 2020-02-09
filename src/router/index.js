import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandScape from '../components/Background/LandScape.vue'
import Portlate from '../components/Background/Portlate.vue'
import Snap from '../components/Background/Snap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/landscape',
    name: 'landscape',
    component: LandScape
  },
  {
    path: '/portlate',
    name: 'portlate',
    component: Portlate
  },
  {
    path: '/snap',
    name: 'snap',
    component: Snap
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
