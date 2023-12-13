<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore()

const username = ref('')
const password = ref('')

const route = useRoute()
const router = useRouter()

const showAlert = ref(false);

function login (){
    if(username.value === store.user.username && password.value === store.user.password){
        store.user.isAuthenticated = true;
        const redirectPath = route.query.redirec || '../views/FavouritesView.vue'
        router.push(redirectPath);
    
      } else {
    showAlert.value = true;
  }
}
    
</script>

<template> 

  <body class=" d-flex justify-content-center align items-center vh-100">
     
    <form @submit.prevent="login" class="bg-danger opacity-75  p-5 rounded-5" style="width: 300px; height: 350px">
        
      <div class="text-center fw-bold mt-4"><h1>Welcome</h1></div>

      <div class="input-group mt-1">
        
      <input class="form-control border border-black" type="text"  id="email" aria-describedby="emailHelp" placeholder="Username" v-model="username">
          
      </div>

      <div class="input-group mt-3 ">
    
        <input class="form-control border border-black" type="password"  id="password" placeholder="Password" v-model="password">

      </div>

        <button type="submit" class=" form-control btn btn border border-black mt-3">Log in</button> 

      <div v-if="showAlert" class="alert alert-danger mt-3" role="alert">
         Invalid username or password. Please try again.
      </div>
    </form> 
  </body>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

body {
background-image: url("../assets/phqotos/Fondo_poke_5.jpeg");
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
}

form {
  margin-top: 35vh;
}

button {
  background-color: #FF9393;
}

</style>