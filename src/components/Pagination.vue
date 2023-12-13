
<script setup>
import { ref, onMounted, computed } from 'vue';
import {useStore} from './../stores/store'

const store = useStore()

const agregarAFavoritos = (pokemon) => {
  store.agregarFavorito(pokemon)
}

const removerDeFavoritos = (pokemon) => {
  store.removerFavorito(pokemon)
}


const pokemons = ref([]);
const nextUrl = ref('');
const previousUrl = ref('');
const currentPage = ref(0);
const totalPages = ref(0);
const count = ref(0);
const statPercent = (baseStat) => `${baseStat / 2}%`
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

const updatePokemons = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  nextUrl.value = data.next;
  previousUrl.value = data.previous;
  count.value = data.count;
  totalPages.value = Math.ceil(count.value / 12);
  const orderedPokemonUrls = data.results.sort((a, b) => a.id - b.id).map(pokemon => pokemon.url);
  pokemons.value = await Promise.all(orderedPokemonUrls.map(async (pokemonUrl) => {
    const pokemonRes = await fetch(pokemonUrl);
    const pokemonData = await pokemonRes.json();
    //Estadísticas
    const stats = pokemonData.stats.map(stat => ({
      stat: stat.stat,
      base_stat: stat.base_stat,
    }));
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,      
      type: pokemonData.types[0].type.name,
      order: pokemonData.order,
      ability: pokemonData.abilities.map((item) => item.ability.name),
      stats: stats,
    };
  }));
};

const prev = () => {
  if (currentPage.value > 0) {
    currentPage.value -= 1;
    updatePokemons(previousUrl.value);
  }
};

const next = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value += 1;
    updatePokemons(nextUrl.value);
  }
};

const goToPage = (page) => {
  if (page === '...') return;
  currentPage.value = page - 1;
  updatePokemons(`https://pokeapi.co/api/v2/pokemon?offset=${currentPage.value * 12}&limit=12`);
};

const getPokemonImage = (pokemon) => {
  return pokemon.image || '/images/default.png';
};

const toggleFlip = (pokemon) => {
  pokemon.isFlipped = !pokemon.isFlipped;
};

/* onMounted(async () => {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12';
  updatePokemons(initialUrl);
}); */

onMounted(() => {
  updatePokemons("https://pokeapi.co/api/v2/pokemon?limit=12")
})

const displayedPages = computed(() => {
  const pages = [];
  if (totalPages.value <= 10) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 5) {
      for (let i = 1; i <= 8; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value - 1);
      pages.push(totalPages.value);
    } else if (currentPage.value >= totalPages.value - 6) {
      pages.push(1);
      pages.push(2);
      pages.push('...');
      for (let i = totalPages.value - 7; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push(2);
      pages.push('...');
      for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value - 1);
      pages.push(totalPages.value);
    }
  }
  return pages;
});

const element = document.getElementById("svg_heart");

/* if (window.localStorage.getItem("heartOn")) {  
    element.classList.add("selected");
}
 */
/* function toggleSelected() {
    var element = document.getElementById("heart1");
    element.classList.toggle("d-block");
    window.localStorage.setItem("heartOn", element.classList.contains("selected"));
}
 */

  const imageUrl = ref('./../assets/photos/iconos/heartEmpty.svg');
  
  const changeImage = () => {
  imageUrl.value = './../assets/photos/iconos/heartFill.svg';
};


</script>

<template>  
  <div id="app">
    <section id="pagination">
      <div class="navigation">
        <button @click="prev" :disabled="currentPage === 0">«</button>
        <div class="numbers">
          <button v-for="page in displayedPages" :key="page" @click="goToPage(page)">
            {{ page }}
          </button>
        </div>
        <button @click="next" :disabled="currentPage === totalPages - 1">»</button>
      </div>
    </section>
    <section>
      <div class="poke-container">
        <div class="card pokemon grid-poke" v-for="pokemon in pokemons" :key="pokemon.id">
          <div class="card__inner" 
          :class=" { 'is-flipped': pokemon.isFlipped }" 
          :style="{ backgroundColor: typeColors[pokemon.type] }"
          >
           <!-- Card back -->
            <div class="card__face card__face--front card-front">
              <div class="number"><span class="number" id="number-poke"># {{ pokemon.order.toString().padStart(4, 0) }}</span></div>
              <div class="img-container"><img :src="pokemon.image" alt=""></div>
              <div class="info"><h3 class="name">{{ pokemon.name }}</h3></div>
              <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Ver</button>
              <a href=""><img id="heart1" src="./../assets/photos/iconos/heartEmpty.svg" alt="" @click="agregarAFavoritos(pokemon), changeImage()"></a>             
                          
              <a> <img src="./../assets/photos/iconos/trash.svg" alt="" @click="removerDeFavoritos(pokemon)"></a>
            </div>
            <!-- Card back -->
            <div class="card__face card__face--back card-back">
              <p class="text-primary-emphasis">Habilidades: </p>
              <div class="ability">
                <div v-for="ability in pokemon.ability" :key="ability">{{ ability }}</div></div>
                <p class="characteristics">
                  <div v-for="characteristic in pokemon.characteristics" :key="characteristic">{{ characteristic }}</div>
                </p> 
                <p class="text-primary-emphasis">Tipo: </p>
                <p class="type">{{ pokemon.type }}</p>
                <p class="text-primary-emphasis">Estadísticas: </p>
                <div class="stats-container">
                  <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat-container m-1">
                    <p>{{ stat.stat.name }}</p>
                    <div class="progress">
                      <div class="progress-bar"
                        role="progressbar"
                        :style="{ width: statPercent(stat.base_stat) }"
                        :aria-valuenow="stat.base_stat"
                        aria-valuemin="0"
                        aria-valuemax="200">{{ stat.base_stat }}
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Volver</button>  
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

/* 
video{
    z-index: -1000;
    left: 50%;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    object-fit: cover;
} */

* {
  margin: 0;
  padding: 0;
}

body {
  background-image: url("./../assets/imagen/prueba2.jpg");
}

.ability {
  position: absolute;
    top: 60px;;
    font-size: 15px;
}

/* BOTONES PAGINACIÓN */
#pagination {
  display: flex;
}

.navigation {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    margin: 0px auto;
}
.navigation .numbers {
    margin-left: 15px;
    margin-right: 15px;
}
.navigation .numbers span button {
    font-size: 20px;
    padding: 0 2px;
    border: 10px;
    color: red;
    cursor: pointer;
}
.navigation .numbers button:hover {
    border-radius: 5px;
    box-shadow: rgba(185, 26, 26, 0.34) 0px 0px 0px 2px;
}
.navigation > button {
    font-size: 20px;
    border: 0;
    cursor: pointer;
    transition: .6s;
    font-weight: 700;
    background-color: #fff;
    border-radius: 10px;
}
.navigation > button:hover {
    transform: scale(1.2);
}
.navigation button {
  font-size: 20px;
  border-radius: 10px;
  width: 40px;
  background-color: rgb(221, 119, 119);
  border: 1px white solid;
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

// CARDS
.card {
  width: 350px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
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
  justify-content: space-evenly; 
  text-align: center; 
}
 
.card__face--front h2 {
  color: #FFF;
}

.card__face--back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-evenly; 
  text-align: center; 
}

.card__face--back .number{
  text-align: left;
}

#number-poke{
    position: absolute;
    top: 20px;
    left: 25px;
    font-size: 20px;;
}

.card img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

// CARD EFFECTS
.img-container img {
    width: 100%;
    transition: 1s;
}

img {
  width: 100%;
}

.img-container:hover > img {
    transform: scale(1.3);
}


//  BARRA ESTADISTICAS
.stats-container {
  display: flex;
  flex-direction: column;
}

.stat-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
}

.progress {
  width: 100px;
  margin-left: 25px;
  background-color: #ddd;
  border: 1px solid darkgray;
}

.progress-bar {
  height: 18px;
  background-color: #4d4d4d;
  color: white;
  line-height: 20px;
  font-size: 14px;  
}






</style>

