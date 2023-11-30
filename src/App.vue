<!-- App.vue -->

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import PokeApi from './views/PokeApi.vue';

</script>

<template>
       <div class="wrapper">
        <header>
          <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/pokeapi">PokeApi</RouterLink>
          </nav>
        </header>
      </div>
  <RouterView />
</template>



<style lang="scss" scoped>
.pokemon{
    margin: 2rem;
    width: 30%;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
