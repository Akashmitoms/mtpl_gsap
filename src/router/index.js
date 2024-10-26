import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import OurServices from '../components/OurServices.vue'
import Portfolio from '../components/Portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/ourServices',
      name: 'OurServices',
      component: OurServices,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
  ]
})

export default router
