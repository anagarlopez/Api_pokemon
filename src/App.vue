<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Header1Component from "./components/Header1Component.vue"
import Header2Component from "./components/Header2Component.vue"
import Header3Component from "./components/Header3Component.vue"
import FooterComponent from "./components/FooterComponent.vue"
import HomeView from './views/HomeView.vue';
</script>

<template>


  <Header1Component />
  <Header2Component />
  <Header3Component />
 
<main>
  <RouterView />
  <HomeView />
 
  <FooterComponent />
</main>

</template>

<style lang="scss" scoped>

@import '../styles.scss';
.pokemon{
    margin: 2rem;
    width: 30%;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
