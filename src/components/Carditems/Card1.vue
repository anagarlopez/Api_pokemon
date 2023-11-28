<script setup>
import { ref } from "vue";

const { pokemons, data } = defineProps(["pokemons", "data"]);


</script>
<template>
    <div class="card1" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn btn-primary">Estadisticas</a>
        </div>
    </div>

    <div>
        <div>
            v-for= "pokemon in pokemons": :key="pokemon.id"
        </div>
       
        <h3>{pokemon.name}</h3>
    </div>
</template>
<style lang="scss" scoped></style>
