<script setup>
import { ref, onMounted } from 'vue';
import Card1 from './CardData1.vue';

const pokemons = ref([]);
const nextUrl = ref("");
const prevUrl = ref("");
const updatePokemons = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(res =>{
            if (res.results) {
                pokemons.value=res.results;   
            }

            else{console.error('Respues de la API, no tiene la propiedad "results"', res)};
            prevUrl.value=res.previous;
            nextUrl.value=res.next;
            
        })
        .catch(error=>{console.error('Error al obtener los datos de los pokemons', error)});
    }

    onMounted(()=>{

        updatePokemons('https://pokeapi.co/api/v2/pokemon')
    })

</script>

<template>


</template>
<style lang="scss" scoped></style>