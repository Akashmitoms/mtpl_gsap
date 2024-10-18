import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import OurServices from '../components/OurServices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ourServices',
      name: 'OurServices',
      component: OurServices,
    },
  ]
})

export default router
