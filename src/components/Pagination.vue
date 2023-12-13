
<script setup>
/*   import { RouterLink, RouterView } from 'vue-router';
  import PokeApi from './views/PokeApi.vue';
  import { ref, onMounted } from 'vue'
 */
/* const pokemons = ref([])
const nextUrl = ref('')
const previousUrl = ref('')
 */

let container = document.querySelector(".pokemos");
let selecPage = document.querySelector("#limit");
let navigation = document.querySelector(".numbers");

const pokeURL = "https://pokeapi.co/api/v2/pokemon";
let nextLink = " ";
let prevLink = " ";
let count = 0;
let perPage = 12;

//// **** ¡¡ REVISAR ESTA FUNCION EN EL VIDEO !!  antes de minuto 14 *** //////

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
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      nextLink = responseJson.next;
      prevLink = responseJson.previous;    
      count = responseJson.count;
      addNumber();
      showPokemons(responseJson.results);
    })
}

//getPokemos(`${pokeURL}?offset=0&limit=12`)

const showPokemons = (array) => {
  clearContainer();
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
    number.innerHTML = i;
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
const clearContainer = () => container.innerHTML = " ";
const clearNavigation = () => navigation.innerHTML = " ";

getPokemos(`${pokeURL}?offset=0&limit=12`)

</script>


<template>

  <main>
    <section>
      <div class="container">
        <div class="pokemons">
          
        </div>
      </div>
    </section>

  </main>
      
    <footer>
      <div class="limit">
        <p>Por página</p>
        <select id="limit" @change="changePg(value);">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
      </div>
      <div class="navigation">
        <button @click="prev()"> &#171; </button>
        <button @click="next()"> &#187; </button>

      </div>
    </footer>

   <RouterView /> 
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
