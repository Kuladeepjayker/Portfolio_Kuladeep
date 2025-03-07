import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  // {
  //   path: '/AboutView',
  //   name: 'AboutView',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
