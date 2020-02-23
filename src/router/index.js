import Vue from 'vue'
import VueRouter from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/* Router Modules */
import testRouter from './modules/test'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      }, 
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/Demo.vue')
      },
    ],
  },
  testRouter
]

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
