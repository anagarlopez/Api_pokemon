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
      component: () => import('../views/HomeView2.vue')
    },
    {
      path: '/favourites',
      name: 'favourites',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FavouritesView.vue')
    },
    {  
    path: '/pokeapi',
    name: 'pokeapi',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/PokeApi.vue')
    },    
  {
    path: '/login',
    name: 'login',
    component: LoginView
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