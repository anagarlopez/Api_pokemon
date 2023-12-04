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

  <body class=" d-flex justify-content-center align items-center vh-100">
     
    <form @submit.prevent="login" class="bg-danger opacity-75  p-5 rounded-5" style="width: 350px; height: 400px">
        
      <div class="text-center fs-1 fw-bold"><h1>Welcome</h1></div>
      <div class="input-group">
        <div class="input-group-text">

        
  
            <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Username" v-model="username">
          
          </div>

          <div class="">
    
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">

          </div>

          <div class="p-3 mb-2 bg-danger text-white">

            <button type="submit" class="btn btn-primary">Log in</button>
          </div>
          </div>
    </form> 
    
   
  </body>
</template>

<style lang="scss" scoped>

</style>