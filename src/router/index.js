import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue')
    },
    {
      path: '/courses/:slug',
      name: 'courseDetail',
      component: () => import('../views/CourseDetails.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/Messages.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/Achievements.vue')
    },
    {
      path: '/wishlists',
      name: 'wishlists',
      component: () => import('../views/Wishlists.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/Notifications.vue')
    },
  ]
})

export default router
