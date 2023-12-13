<script setup>
import AddPokemon from './components/AddPokemon.vue'; // Ajusta la ruta según la ubicación de tu componente
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from "./components/FooterComponent.vue"
</script>

<template>
 
<main>
  <RouterView />
  <div id="app">
    <add-pokemon></add-pokemon>

    <h2>Listado de Pokémon:</h2>
    <ul>
      <li v-for="pokemon in $store.pokemons" :key="pokemon.name">
        {{ pokemon.name }} - <img :src="pokemon.image" alt="Imagen de Pokémon">
      </li>
    </ul>
  </div>
 
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
