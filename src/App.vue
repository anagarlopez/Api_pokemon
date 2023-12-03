<script setup>

import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
</script>

<template>

  <header>
    <nav class="nav-icon">
      <img id="logo-pokemon" src="./assets/photos/Logos/Logo_de_Pokémon_HOME.png" alt="" width="150">
      <img id="pokebola" src="./assets/photos/Logos/Pokebola.png" alt="" width="50">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/favourites">Favourites</RouterLink>
      </nav>
  </header> 

<main>
  <RouterView />
</main>

</template>

<style lang="scss" scoped>

@import '../styles.scss';

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

nav{
    font-size: 2rem;
    
    a{
        text-decoration: none;
        color: black;
    }
}
.nav-icon{
    padding: 1%;
    background-color: #B1230F;
    color: black;
}
#logo-pokemon{
    float: right;
}

/*header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>