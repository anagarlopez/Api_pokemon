<!-- App.vue -->
<template>
  <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
          <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/pokeapi">PokeApi</RouterLink>
          </nav>
      </div>
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import PokeApi from './views/PokeApi.vue';
</script>

<style lang="scss" scoped>
</style>
