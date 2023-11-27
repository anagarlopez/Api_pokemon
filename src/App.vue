<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'

</script>

<template>



<script>
import { pinia } from '@/store';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  setup() {
    pinia.useVue3Devtools();
  },
};
</script>
 <!--  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" /> -->
      <Login></Login>
   <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
    </nav>
    <!-- </div> --> 
  <!-- </header> -->

  <RouterView />
</template>



<style>

</style>



