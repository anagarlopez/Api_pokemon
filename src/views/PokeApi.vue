<template>
    <div>
        <h1>Soy la pokeapi</h1>
        <PokeApiList :pokemons="pokemons" :colors="colors" />
        <button v-if="prevUrl" class="button" @click="updatePokemons(prevUrl)">Back</button>
        <button v-if="nextUrl" class="button" @click="updatePokemons(nextUrl)">Next</button>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import PokeApiList from '../components/PokeApiList.vue';

    const pokemons = ref([]);
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
    };
    const prevUrl = ref('');
    const nextUrl = ref('');

    const updatePokemons = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.results) {
                    pokemons.value = res.results;
                } else {
                    console.error('La respuesta de la API no tiene la propiedad "results".', res);
                }

                prevUrl.value = res.previous;
                nextUrl.value = res.next;
            })
            .catch(error => {
                console.error('Error al obtener los Pokémon:', error);
            });
    };

    onMounted(() => {
        updatePokemons("https://pokeapi.co/api/v2/pokemon");
    });
</script>

<style lang="scss" scoped>
</style>
