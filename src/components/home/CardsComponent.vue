<script setup>
import { ref, onMounted } from 'vue'

const pokemons = ref ([])
const nextUrl = ref('')
const previousUrl = ref ('')
//const selectedPokemonId = ref(null)
//const isFlipped = ref(false)
const statPercent = (baseStat) => `${baseStat / 2}%`

const updatePokemons = async (url) => {
  if (url) {
    const res = await fetch(url)
    const data = await res.json()    
    nextUrl.value = data.next
    previousUrl.value = data.previous
    pokemons.value = await Promise.all(data.results.map(async pokemon => {
      const pokemonRes = await fetch(pokemon.url)
      const pokemonData = await pokemonRes.json()
      //Estadísticas
      const stats = pokemonData.stats.map(stat => ({
        stat: stat.stat,
        base_stat: stat.base_stat
      }));
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        type: pokemonData.types[0].type.name,
        //ability: pokemonData.ability[0].ability.name,
        ability: pokemonData.abilities.map((item) => item.ability.name),        
        nature: pokemonData.nature,
        stats: stats
      }
    }))
  }
}

onMounted(() => {
  updatePokemons("https://pokeapi.co/api/v2/pokemon?limit=12")
})



/* const toggleFlip = () => {
  isFlipped.value = !isFlipped.value;
}; */

const toggleFlip = (pokemon) => {
  pokemon.isFlipped = !pokemon.isFlipped;
};

/* function viewMore(pokemonId) {
  selectedPokemonId.value = pokemonId;  
} */

/* function viewMore() {
  if (cardBack.value) {
    cardBack.value.classList.add("d-block");
    cardBack.value.style.transform = "rotateY(180deg)";
  }
} */

//let isLoaded = ref(false)

</script>

<!-- <template>
    <div id="app">
    <h1>Pokedex</h1>
    <div class="poke-container d-flex justify-content-evenly border flex-wrap ">
      <div class="card pokemon grid-poke border rounded px-2 py-1" @click="toggleFlip()" v-for="pokemon in pokemons" :key="pokemon.id">
        <div class="card__inner" :class="{ 'is-flipped': isFlipped }">

          <div class="card__face card__face--front card-front">
            <div class="number"><span class="number"># {{ pokemon.id.toString().padStart(4, 0) }}</span></div>
            <div class="img-container">
              <img :src="pokemon.image" alt="">
            </div>
            <div class="info">          
              <h3 class="name">{{ pokemon.name }}</h3>
              <small class="type">Tipo: {{ pokemon.type }}</small>            
              <button class="button" @click="toggleFlip(pokemon)">Ver</button>
            </div>
          </div>
          
          <div class="card__face card__face--back card-back">
            <div class="card-back" v-if="pokemon.id === selectedPokemonId"> 
              <div class="pokemon">
                <p class="ability">Habilidad: {{ pokemon.ability }}</p>
                <p class="characteristics">Características: {{ pokemon.characteristics }}</p>
                <p class="nature"> Naturaleza: {{ pokemon.nature }}</p>
                <button class="button" @click="viewMore(null)">Cerrar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="links" class="link">
      <button class="button" @click="updatePokemons(previousUrl)" v-if="previousUrl">&#171;</button>
      <button class="button" @click="updatePokemons(nextUrl)" v-if="nextUrl">&#187;</button> 
    </div>
  </div>

</template>
 -->

<template>
<div id="app">
    <h1>Pokedex</h1>
    <div class="poke-container">
      <div class="card pokemon grid-poke rounded px-2 py-1" v-for="pokemon in pokemons" :key="pokemon.id">
        <div class="card__inner" :class="{ 'is-flipped': pokemon.isFlipped }">          
          <!-- Card frontal -->
          <div class="card__face card__face--front card-front">
            <div class="number"><span class="number"># {{ pokemon.id.toString().padStart(4, 0) }}</span></div>
            <div class="img-container">
              <img :src="pokemon.image" alt="">
            </div>
            <div class="info">
              <h3 class="name">{{ pokemon.name }}</h3>
              <small class="type">Tipo: {{ pokemon.type }}</small>
              
              <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Ver</button>
            </div>
          </div>
          <!-- Card trasera -->
          <div class="card__face card__face--back card-back">
            <div class="pokemon">
              <p class="text-primary">Habilidades: </p>
              <p class="ability text-secondary">
                <div v-for="ability in pokemon.ability" :key="ability">{{ ability }}</div></p>
              <p class="text-primary">Características: </p>
             </div>
              <p class="characteristics">
                <div v-for="characteristic in pokemon.characteristics" :key="characteristic">{{ characteristic }}</div></p>                
              <p class="text-primary">Naturaleza: </p>
              <p class="nature">  
                <div v-for="nature in pokemon.nature" :key="nature">{{ nature }}</div></p>
              <p class="text-primary">Estadísticas: </p>
              <p class="stats-container">
                <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat-container m-1">
                  <p>{{ stat.stat.name }}</p>
                  <div class="progress">
                    <div class="progress-bar" :style="{ width: statPercent(stat.base_stat) }"
                        :aria-valuenow="stat.base_stat" aria-valuemin="0" aria-valuemax="200">
                      {{ stat.base_stat }}</div></div></div></p>                

              <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Botones paginación -->
    <div id="links" class="link">
      <button class="button" @click="updatePokemons(previousUrl)" v-if="previousUrl">&#171;</button>
      <button class="button" @click="updatePokemons(nextUrl)" v-if="nextUrl">&#187;</button>
    </div>
</template>


<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
}

.poke-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  margin-top: 20px;
}
.card {
  //margin: 100px auto 0;
  width: 350px;
  height: 600px;
  //perspective: 1000px;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}


.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}
.card__face--front {  
  /* display: flex;
  align-items: center;
  justify-content: center;*/
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}
 
.card__face--front h2 {
  color: #FFF;
  font-size: 32px;
}

.card__face--back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}

/*
.card__content {
  width: 100%;
  height: 100%;
}

 .card__header:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%);
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
} */

// ESTILO BARRA ESTADISTICAS
.stats-container {
  display: flex;
  flex-direction: column;
}

.stat-container {
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-align: left;
}

.progress {
  width: 100px;
  margin: 5px;
  background-color: #ddd;
}

.progress-bar {
  height: 20px;
  background-color: #4caf50;
  color: white;
  line-height: 20px;  
}

</style>