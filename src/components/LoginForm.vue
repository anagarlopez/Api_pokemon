<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore()

const username = ref('')
const password = ref('')

const route = useRoute()
const router = useRouter()


function login (){
    if(username.value === store.user.username && password.value === store.user.password){
        store.user.isAuthenticated = true;
        const redirectPath = route.query.redirec || '/private'
        router.push(redirectPath)
    }
}
</script>

<template> 

<div class="has-bg-img">
         <div class="bg-img bg-cover" style="background-image: url(../assets/); height:100%; width:100%;">
        
        
    
    </div>

    <form @submit.prevent="login">

      <h1>Bienvenido</h1>
      <div class="form-group">
  
        <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="User" v-model="username">

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