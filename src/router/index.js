import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavouritesView from '@/views/FavouritesView.vue'
import LoginView from '../views/LoginView.vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
   },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView
  }
]
})

router.beforeEach((to, from, next) => {

  const stores = useAuthStore()

  if (to.meta.requiresAuth && !stores.user.isAutenthificated) {
    return { name: 'login'}
  }
  // to and from are both route objects. must call `next`.
})

export default router
