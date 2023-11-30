<template>
  <header>
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
      <div>
          <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/pokeapi">PokeApi</RouterLink>
          </nav>
      </div>
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref, onMounted } from 'vue'

const pokemons = ref([])
const nextUrl = ref('')
const previousUrl = ref('')

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
})
</script>

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
