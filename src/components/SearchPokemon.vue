<template>
    <div>
      <form @submit.prevent="fetchData">
        <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Bulbasaur"/>
        <button type="submit">Buscar</button>
      </form>
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
<!--    <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Imagen del Pokémon">
        <p>Número: {{ pokemon.id }}</p> -->
        <div class="card__inner" :class="{ 'is-flipped': pokemon.isFlipped }">
          <div class="card__face card__face--front card-front">
            <div class="number"><span class="number"># {{ pokemon.id.toString().padStart(4, 0) }}</span></div>
            <img :src="pokemon.sprites.front_default" alt="Imagen del Pokémon">
            <h3 class="name">{{ pokemon.name }}</h3> 
            <button class="btn btn-outline-dark btn-mx-aut d-block px-2" id="more" @click="toggleFlip(pokemon)">Ver</button>
          </div>
          <div class="card__face card__face--back card-back">

          </div>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const buscar = ref('')
      const pokemons = ref([])
  
      const fetchData = async () => {
        if (buscar.value) {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscar.value}`)
            const data = await response.json()
            pokemons.value = [data] 
          } catch (error) {
            console.error('Error al buscar el Pokémon:', error)
          }
        } else {
          pokemons.value = []
        }
      }  
      return { buscar, pokemons, fetchData }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .pokemon{
      margin: 2rem;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  .card {
    padding: 5%;
  }

  #more {
    padding: 0;
    text-align: center;
    width: 30%;
  }

  .card__inner.is-flipped {
  transform: rotateY(180deg);
  }
  
  </style>