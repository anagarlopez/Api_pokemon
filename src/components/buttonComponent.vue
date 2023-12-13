<script>


// src="https://cdn.jsdelivr.net/npm/vue@3.2.21/dist/vue.global.prod.js"
// src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
// export default {
//   data() {
//     return {
//       favorites: [],
//       newPokemonName: '',
//     };
//   },
//   methods: {
//     addCustomPokemon() {
//       if (this.newPokemonName.trim() !== '') {
//         const newPokemon = {
//           id: Date.now(),
//           name: this.newPokemonName,
//           number: 'N/A',
//           abilities: ['Custom Ability'],
//         };
//         this.favorites.push(newPokemon);
//         this.newPokemonName = '';
//       }
//     },
//   },
// };

export default {
 data() {
         return {
         favorites: [],
       newPokemonName: '',
     };
   },
   methods: {
     addCustomPokemon() {
       if (this.newPokemonName.trim() !== '') {
         const newPokemon = {
           id: Date.now(),
           name: this.newPokemonName,
           number: 'N/A',
           abilities: ['Custom Ability'],
         };
         this.favorites.push(newPokemon);
         this.newPokemonName = '';
       }
     },
     addNewPokemon() {
       // Lógica para agregar un nuevo Pokémon desde la API u otras fuentes
       // Aquí puedes realizar una llamada a la API de Pokémon para obtener datos aleatorios o específicos
       // Por ahora, solo agregaré un Pokémon de ejemplo
       const newPokemon = {
         id: Date.now(),
         name: 'Nuevo Pokémon',
         number: 'N/A',
         abilities: ['Nueva Habilidad'],
       };
       this.favorites.push(newPokemon);
     },
   },
 }
</script>
<template>
    <div class="container mt-5">
    <h2>Favoritos</h2>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.id">
        {{ favorite.name }} ({{ favorite.number }})
      </li>
    </ul>

    <div class="mt-3"> */
      /* <input v-model="newPokemonName" class="form-control" placeholder="Nombre del nuevo Pokémon">
      <button @click="addCustomPokemon" class="btn btn-success">Agregar Pokémon Personalizado</button>
    </div>
  </div> -->

  <div class="container mt-5">
    <h2>Favoritos</h2>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.id">
        {{ favorite.name }} ({{ favorite.number }})
      </li>
    </ul>

    <div class="mt-3">
      <input v-model="newPokemonName" class="form-control" placeholder="Nombre del nuevo Pokémon">
      <button @click="addCustomPokemon" class="btn btn-success">Agregar Pokémon Personalizado</button>
    </div>

    <div class="mt-3">
      <button @click="addNewPokemon" class="btn btn-primary">Agregar Nuevo Pokémon</button>
    </div>
  </div> 

    <ul>
        <li v-for="favorite in favorites" :key="favorite.id">
          {{ favorite.name }} ({{ favorite.number }})
        </li>
    </ul>

    <div class="mt-3">
      <input v-model="newPokemonName" class="form-control" placeholder="Nombre del nuevo Pokémon">
      <button @click="addCustomPokemon" class="btn btn-success">Agregar Pokémon Personalizado</button>
    </div>

    <div class="mt-3">
      <button @click="addNewPokemon" class="btn btn-primary">Agregar Nuevo Pokémon</button>
    </div>

</template>

<style>
</style>