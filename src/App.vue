<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref, onMounted } from 'vue'
</script>

<template>
  <div>
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
