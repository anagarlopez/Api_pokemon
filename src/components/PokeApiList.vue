<template>
    <div>
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
            <h3>{{  pokemon.name }}</h3>
            <!-- <div class="img-container">
                <img :src="pokemon.sprites.front_default" alt="">
            </div>
            <div class="info">
                <span class="number"># {{ pokemon.id }}</span>
                <h3 class="name">{{ pokemon.name }}</h3>
                <small class="type">Type: {{ pokemon.types.join(', ') }}</small>
            </div> -->
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const { pokemons, colors } = defineProps(['pokemons', 'colors']);

</script>

<style lang="scss" scoped>
</style>