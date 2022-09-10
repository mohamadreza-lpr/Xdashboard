import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/About.vue'
import Charts from '../views/Charts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home page',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/charts',
    name: 'chart page',
    component: Charts
  },
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
