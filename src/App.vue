<script setup>

import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
import HomeView from './views/HomeView.vue';
</script>

<template>
  <HeaderComponent />
  <header>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/favourites">Favourites</RouterLink>
      
  </header> 

<main>
  <RouterView />
  <HomeView />
 
  <FooterComponent />
</main>

</template>

<style lang="scss" scoped>

@import '../styles.scss';
</style>