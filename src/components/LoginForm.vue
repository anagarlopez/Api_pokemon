<script setup>
import { ref } from 'vue'
import { useRoute, useRouter} from 'vue-router'

import {useAuthStore} from '@/stores/auth.js'

const email = ref ('')
const password = ref ('')

const route = useRoute()
const router = useRouter()

const stores = useAuthStore ()

function login () {

    if (username == !stores.user.email) {
        stores.user.isAuthenticated = false
        const redirectPath = route.query.redirect
        router.push(redirectPath)

    }
}

</script>

<template> 

  <div>

    <form @submit.prevent ="login">

      <h1>Bienvenido</h1>
      <div class="form-group">
  
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" v-model="email">

      </div>
      <div class="form-group">
    
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">

      </div>
      <div class="p-3 mb-2 bg-danger text-white">
        <button type="submit" class="btn btn-primary">Log in</button>
      </div>
    </form> 
  </div>
   

</template>

<style lang="scss" scoped>
</style>