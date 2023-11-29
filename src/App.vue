<script setup>

import { RouterLink, RouterView } from 'vue-router'
import LoginForm from './components/LoginForm.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/favourites">Favourites</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <LoginForm />
</template>



<style>

</style>



