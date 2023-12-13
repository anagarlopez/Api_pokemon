<template>
    <div>
      <h2>Añadir Nuevo Pokémon</h2>
      <form @submit.prevent="addPokemon">
        <label for="name">Nombre:</label>
        <input v-model="pokemonName" id="name" required>
        
        <label for="image">URL de la Imagen:</label>
        <input v-model="pokemonImage" id="image" required>
  
        <button type="submit">Añadir Pokémon</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from './../stores/store'; // Ajusta la ruta según la ubicación de tu store
  
  const pokemonName = ref('');
  const pokemonImage = ref('');
  
  const store = useStore();
  
  const addPokemon = () => {
    const newPokemon = {
      name: pokemonName.value,
      image: pokemonImage.value,
    };
  
    store.addPokemon(newPokemon);
  
    // Limpia los campos después de añadir el Pokémon
    pokemonName.value = '';
    pokemonImage.value = '';
  };
  </script>