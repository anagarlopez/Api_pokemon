<script setup>

import { ref } from "vue";
import CardsComponent from "../components/home/CardsComponent.vue";

let isLoaded = ref(false)

</script>

<template>
<body>
    <main></main>
    <CardsComponent />
</body>
</template>

<style lang="scss" scoped>
body{
  background-image: url("./assets/photos/Fondo_poke_4.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: 'Jockey One', sans-serif;
}

main{
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>