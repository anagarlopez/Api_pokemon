<template>
    <div>
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
            <div class="poke-card">
                <h3>{{  pokemon.name }} </h3>
                <a href="" @click.prevent="$emit('toggle-favorite', pokemon)"><img src="../assets/icons/favorite.svg" alt="Favorite"></a>
                <a href=""><img src="../assets/icons/delete.svg" alt="delete"></a>
                <a href=""><img src="../assets/icons/MdiPen.svg" alt="edit"></a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const { pokemons, colors } = defineProps(['pokemons', 'colors']);
</script>

<style lang="scss" scoped>
    .poke-card img{
        width: 1.5rem;
    }
</style>
