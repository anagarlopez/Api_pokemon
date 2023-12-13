<script setup>

import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from "./components/FooterComponent.vue"
</script>

<template>
 
<main>
  <RouterView />
 
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
