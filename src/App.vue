
<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import PokeApi from './views/PokeApi.vue';
  import { ref, onMounted } from 'vue'

/* const pokemons = ref([])
const nextUrl = ref('')
const previousUrl = ref('')
 */

let container = document.querySelector(".pokemos");
let selecPage = document.querySelector("#limit");
let navigation = document.querySelector(".numbers");

const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let nextLink = "";
let prevLink = "";
let count = 0;
let perPage = 40;

const changePg = (value) => {
  const newUrl = `${pokeURL}?limit=${value}`;
  perPage = value;
  getPokemos(newUrl);
}

const prev = () => {
  getPokemos(prevLink);
}

const next = () => {
  getPokemos(nextLink);
}

const getPokemos = (url) => {
  fetch(url)
    .then(response => response.json)
    .then(responseJson => {
      console.log(responseJson);
      nextLink = responseJson.next;
      prevLink = responseJson.previous;    
      count = responseJson.count;
      addNumber()  ;
      showPokemons(responseJson.results);
    })
}
const showPokemons = (array) => {
  array.map(item => {
    fetch(item.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        loadCard(data);
      })
  })
}

const loadCard = (data) => {
  const imagen = data.sprites.other.home.front_default;
  const newImage = imagen ? imagen : "./images/default.png";
  const name = data.name;

  let card = document.createElement("div");
  let content =`
  <img src="${newImage}" alt="${name}">
    <p>${name}</p>
    <p>${data.order}</p>
  `;
  card.innerHTML = content;
  container.appendChild(card);
}

const addNumber = () => {
  clearNavigation();
  const page = count / perPage;
  for (let i = 0; i < page; i++) {
    const element = array[i];
    let number = document.createElement("span");
    number.classList.add(`element-${i}`)
    const numLink = `<button onclick="actionNum(${i})">${i}</button>`
    number.innerHTML = numLink;
    navigation.appendChild(number);
  }
  addFocusClass();

}

const actionNum = (index) => {
  const newUrl = `${pokeURL}?offset=${index*perPage}&limit=${perPage}`;
  getPokemos(newUrl);
}

const addFocusClass = () => {
  const span = document.querySelector()
}
const clearContainer = () => container.innerHTML = "";
const clearNavigation = () => navigation.innerHTML = "";

getPokemos(`${pokeURL}?offset=0&limit=40`)

/* 
// CÓDIGO BORJA
const updatePokemons = async (url) => {
  if (url) {
    const res = await fetch(url)
    const data = await res.json()
    nextUrl.value = data.next
    previousUrl.value = data.previous
    pokemons.value = await Promise.all(data.results.map(async pokemon => {
      const pokemonRes = await fetch(pokemon.url)
      const pokemonData = await pokemonRes.json()
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        type: pokemonData.types[0].type.name
      }
    }))
  }
}

onMounted(() => {
  updatePokemons("https://pokeapi.co/api/v2/pokemon?limit=10")
}) */

</script>

<!-- App.vue -->
<!-- <template>
  <header>
    <div id="app">
    <h1>Pokedex</h1>
    <div class="poke-container">
      <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.id">
        <div class="img-container">
          <img :src="pokemon.image" alt="">
        </div>
        <div class="info">
          <span class="number"># {{ pokemon.id }}</span>
          <h3 class="name">{{ pokemon.name }}</h3>
          <small class="type">Type: {{ pokemon.type }}</small>
        </div>
      </div>
    </div>
    <div id="links" class="link">
      <button class="button" @click="updatePokemons(previousUrl)" v-if="previousUrl">Back</button>
      <button class="button" @click="updatePokemons(nextUrl)" v-if="nextUrl">Next</button>
    </div>
  </div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
          <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/pokeapi">PokeApi</RouterLink>
          </nav>
      </div>
  </header>
  <RouterView /> 
</template> -->

<template>
  <header>
    <section>
      <div class="container">
        <div class="pokemons">
          
        </div>
      </div>

    </section>
  </header>
  
    
    <footer>
      <div class="limit">
        <p>Por página</p>
        <select id="limit" onchange="changePg(value);">
          <option value="40">10</option>
          <option value="40">20</option>
          <option value="40">30</option>
        </select>
      </div>
      <div class="navigation">
        <button onclick="prev()"> &#171; </button>
        <button onclick="next()"> &#187; </button>

      </div>
    </footer>
  
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
