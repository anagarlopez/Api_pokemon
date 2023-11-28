<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'
import { pinia } from '@/store';
import LoginForm from '@/components/LoginForm.vue';
</script>

<template>

  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>



<style>

</style>



