import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavouritesView from '@/views/FavouritesView.vue'
import LoginView from '@/views/LoginView.vue'

import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
  {
    path: '/login',
    name: 'login',
    component: LoginView
   },

   {
    path: '/about',
    name: 'about',
    component: AboutView
   },

  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView,
    meta: {isAuthenticated: true}
  }
]
})

router.beforeEach((to) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAutenthificated) {
    return { name: 'login'};
    
  }
 
})

export default router