
<script setup>
import { ref, onMounted, computed } from 'vue';

const pokemons = ref([]);
const nextUrl = ref('');
const previousUrl = ref('');
const currentPage = ref(0);
const totalPages = ref(0);
const count = ref(0);

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
    const stats = pokemonData.stats.map((stat) => ({
      stat: stat.stat.name,
      base_stat: stat.base_stat,
    }));
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,
      order: pokemonData.order,
      ability: pokemonData.abilities.map((item) => item.ability.name),
      nature: [pokemonData.nature],
      stats: stats,
      isFlipped: false,
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

onMounted(async () => {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12';
  updatePokemons(initialUrl);
});

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
</script>

<template>
  <div id="app">
    <h1>Pokedex</h1>
    <header>
      <div class="navigation">
        <button @click="prev" :disabled="currentPage === 0">«</button>
        <div class="numbers">
          <button v-for="page in displayedPages" :key="page" @click="goToPage(page)">
            {{ page }}
          </button>
        </div>
        <button @click="next" :disabled="currentPage === totalPages - 1">»</button>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="pokemons">
          <div v-for="pokemon in pokemons" :key="pokemon.id" @click="toggleFlip(pokemon)">
            <img :src="getPokemonImage(pokemon)" :alt="pokemon.name" />
            <p>{{ pokemon.name }}</p>
            <p class="order"> #{{ pokemon.order }}</p>
            <div class="pokemon-details" v-if="pokemon.isFlipped">
              <p>Habilidades: {{ pokemon.ability.join(', ') }}</p>
              <p>Naturaleza: {{ pokemon.nature.join(', ') }}</p>
              <p>Estadísticas: {{ JSON.stringify(pokemon.stats) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
}

.container {
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

/* BOTONES PAGINACIÓN */
.navigation {
    display: flex;
    align-items: center;
    margin-top: 2%;
}
.navigation .numbers {
    margin-left: 10px;
    margin-right: 10px;
}
.navigation .numbers span button {
    font-size: 20px;
    padding: 0 2px;
    font-family: 'Baloo 2', 'helvetica';
    background-color: #ffffff00;
    border: 0;
    color: #fff;
    cursor: pointer;
    margin: 0 2px;
}
.navigation .numbers button:hover {
    border-radius: 25px;
    box-shadow: rgb(253 253 253 / 34%) 0px 0px 0px 2px;
}
.navigation > button {
    font-size: 20px;
    border: 0;
    cursor: pointer;
    transition: .5s;
    font-weight: 700;
    background-color: #fff;
    border-radius: 6px;
}
.navigation > button:hover {
    transform: scale(1.3);
}
.current button{
    box-shadow: rgb(253 253 253 / 34%) 0px 0px 0px 2px;
    border-radius: 25px;
} 

</style>

