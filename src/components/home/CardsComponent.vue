<script setup>
import { ref, onMounted } from 'vue'
import {useStore} from '../../stores/store'


//PRUEBA DE TIENDA
const store = useStore()

const agregarAFavoritos = (pokemon) => {
  store.agregarFavorito(pokemon)
}

const removerDeFavoritos = (pokemon) => {
  store.removerFavorito(pokemon)
}

// FIN DE TIENDA

const pokemons = ref ([])
const nextUrl = ref('')
const previousUrl = ref ('')
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
      const stats = pokemonData.stats.map(stat => ({
        stat: stat.stat,
        base_stat: stat.base_stat
      }));
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        type: pokemonData.types[0].type.name,
        ability: pokemonData.abilities.map((item) => item.ability.name),  
        stats: stats,
        order: pokemonData.order,
      }
    }))
  }
}


onMounted(() => {
  updatePokemons("https://pokeapi.co/api/v2/pokemon?limit=12")
})

const toggleFlip = (pokemon) => {
  pokemon.isFlipped = !pokemon.isFlipped;
};


</script>


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
              <button @click="agregarAFavoritos(pokemon)">Agregar a favoritos</button>
              <button @click="removerDeFavoritos(pokemon)">Remover de favoritos</button>
            
            </div>
            <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Ver</button>
          </div>
          <!-- Card trasera -->
          <div class="card__face card__face--back card-back">
              <p class="text-primary">Habilidades: </p>
              <div class="ability text-secondary">
                <div v-for="ability in pokemon.ability" :key="ability">{{ ability }}</div></div>
              <p class="characteristics">
                <div v-for="characteristic in pokemon.characteristics" :key="characteristic">{{ characteristic }}</div></p>  
        
              <p class="text-primary">Tipo: </p>
              <p class="type">{{ pokemon.type }}</p>

              <p class="text-primary">Estadísticas: </p>
              <div class="stats-container">
                <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat-container m-1">
                  <p>{{ stat.stat.name }}</p>
                  <div class="progress">
                    <div class="progress-bar" 
                      :style="{ width: statPercent(stat.base_stat) }"
                      :aria-valuenow="stat.base_stat" 
                      aria-valuemin="0" 
                      aria-valuemax="200">
                      {{ stat.base_stat }}</div></div></div></div>                

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

    <div v-for="favorito in store.favoritos" :key="favorito.id">
      <div class="card pokemon grid-poke rounded px-2 py-1" v-for="favorito in store.favoritos" :key="favorito.id">
  <div class="card__inner" :class="{ 'is-flipped': favorito.isFlipped }">          
    <!-- Card frontal -->
    <div class="card__face card__face--front card-front">
      <div class="number"><span class="number"># {{ favorito.id.toString().padStart(4, 0) }}</span></div>
      <div class="img-container">
        <img :src="favorito.image" alt="">
      </div>
      <div class="info">
        <h3 class="name">{{ favorito.name }}</h3>
        <small class="type">Tipo: {{ favorito.type }}</small>
        
        <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(favorito)">Ver</button>
      </div>
    </div>
    <!-- Card trasera -->
    <div class="card__face card__face--back card-back">
      <div class="pokemon">
        <p class="text-primary">Habilidades: </p>
        <p class="ability text-secondary">
          <div v-for="ability in favorito.ability" :key="ability">{{ ability }}</div></p>
        <p class="text-primary">Características: </p>
       </div>
        <p class="characteristics">
          <div v-for="characteristic in favorito.characteristics" :key="characteristic">{{ characteristic }}</div></p>                
        <p class="text-primary">Naturaleza: </p>
        <p class="nature">  
          <div v-for="nature in favorito.nature" :key="nature">{{ nature }}</div></p>
        <p class="text-primary">Estadísticas: </p>
        <p class="stats-container">
          <div v-for="stat in favorito.stats" :key="stat.stat.name" class="stat-container m-1">
            <p>{{ stat.stat.name }}</p>
            <div class="progress">
              <div class="progress-bar" :style="{ width: statPercent(stat.base_stat) }"
                  :aria-valuenow="stat.base_stat" aria-valuemin="0" aria-valuemax="200">
                {{ stat.base_stat }}</div></div></div></p>                

        <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(favorito)">Volver</button>
      </div>
    </div>
  </div>
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
  width: 350px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-evenly; 
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
  justify-content: space-evenly; 
  text-align: center; 
}



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