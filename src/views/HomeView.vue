<script setup>
import { ref } from "vue";

let isLoaded = ref(false)

</script>


<template>
  <div id="pokemonWorld">
    <h1>Welcome to pokemon World</h1>

    <main class="container text-center d-flex flex-wrap">
      <div v-for="pokemon in pokemon" v-if="isLoaded">
        <div class="card text-bg-dark m-2">
          <img :src="pokemon.image" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">{{ pokemon.name }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <span class="spinner-border text-primary"></span>
      </div>
    </main>

  </div>
</template>

<style lang="scss" scoped>

h1 {
  background-color: black;
}

</style>