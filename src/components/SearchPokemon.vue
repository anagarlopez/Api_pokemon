<template>
    <div>
      <form @submit.prevent="fetchData">
        <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Bulbasaur"/>
        <button type="submit">Buscar</button>
      </form>
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon card pokemon grid-poke rounded px-2 py-1">
        <div class="card__inner" 
        :class="{ 'is-flipped': pokemon.isFlipped }"
        >
        
          <div class="card__face card__face--front card-front">
            <div class="number"><span class="number" id="number-poke"># {{ pokemon.id.toString().padStart(4, 0) }}</span></div>
            <img :src="pokemon.sprites.front_default" alt="Imagen del Pokémon">
            <h3 class="name">{{ pokemon.name }}</h3> 
            <button class="btn btn-outline-dark btn-mx-aut d-block px-2" id="view" @click="toggleFlip(pokemon)">Ver</button>
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

  const toggleFlip = (pokemon) => {
  pokemon.isFlipped = !pokemon.isFlipped;
}
const typeColors = {
  grass: 'rgba(80, 121, 200, 0.6)',
  fire: 'rgba(233, 142, 77, 0.6)',
  water: 'rgba(104, 144, 240, 0.6)',
  bug: 'rgba(168, 184, 32, 0.6)',
  fighting: 'rgba(115, 126, 124, 0.6)',
  water: 'rgba(25, 156, 213, 0.8)',
  grass: 'rgba(67, 244, 244, 0.8)',
  poison: 'rgba(208, 233, 59, 0.8)',
  normal: 'rgba(244, 236, 44, 0.8)',
  ground: 'rgba(131, 97, 227, 0.8)',
  ghost: 'rgba(76, 243, 183, 0.8)',
  rock: 'rgba(54, 16, 161, 0.8)',
  psychic: 'rgba(236, 95, 231, 0.8)',
  electric: 'rgba(236, 169, 39, 0.8)',  
  ice: 'rgba(55, 116, 136, 0.8)',
  steel: 'rgba(55, 136, 116, 0.8)',
  flying: 'rgba(59, 22, 118, 0.8)',
  dark: 'rgba(42, 39, 47, 0.8)',
  fairy: 'rgba(12, 79, 59, 0.8)',
  steel: 'rgba(247, 162, 101, 0.8)',
  dragon: 'rgba(74, 134, 119, 0.8)',
}


  
  </script>
  
  <style lang="scss">

#number-poke{
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 20px;;
    font-size: 15px;
}

#number-poke{
    position: absolute;
    top: 20px;
    left: 25px;
    font-size: 15px;;
}
.ability {
  position: absolute;
  top: 72px;;
  font-size: 15px;
}
.type {
  position: absolute;
  top: 150px;
  font-size: 15px;
}

#heart1 {
  position: relative;
    top: -510px;
    left: 140px;
}
.name {
  position: relative;
  bottom: -30px; 
}

#view {
  position: relative;
  bottom: -74px; 
}

#back {
  position: relative;
  bottom: -22px; 
}

.card__inner.is-flipped {
transform: rotateY(180deg);
}


.card {
  margin-left: 30px;
  width: 200px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;   
}
  
  </style>