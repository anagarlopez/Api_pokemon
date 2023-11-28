<script setup>
import { ref } from 'vue'
import { useRoute, useRouter} from 'vue-router'

import {useAuthStore} from '@/store/auth.js'

const username = ref ('')
const password = ref ('')

const store = useAuthStore ()

function login () {

    if (username == store.user.username) {
        store.user.isAuthenticated = false
    }
}
</script>

<template> 

  <div>

    <form @submit.prevent ="login">

      <h1>Bienvenido</h1>
      <div class="form-group">
  
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">

      </div>
      <div class="form-group">
    
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">

      </div>
      <div class="p-3 mb-2 bg-danger text-white">
        <button type="submit" class="btn btn-primary">Log in</button>
      </div>
  </div>
    </form>

</template>

<style lang="scss" scoped>
</style>