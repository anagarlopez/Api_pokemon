<script setup>

</script>

<template>

  <header>

    <div class="wrapper">

      <nav>

    <img src="./../assets/photos pokemon/Logos/Logo_de_Pokémon_HOME.png" alt="Logo_pokemon">
    <RouterLink class="routerLink" to="/">HOME</RouterLink>
      
    <RouterLink class="routerLink" to="/login">LOG IN<img src="./../assets/photos pokemon/Logos/Pokebola.png" alt="pokeball" /></RouterLink>
    <!-- <RouterLink to="/favourites">Favorites</RouterLink> -->
  </nav>
  
</div>
 
</header>

</template>


<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css2?family=Jockey+One&family=Zen+Kaku+Gothic+Antique:wght@300;400&display=swap');

  nav {

background-color: #B1230F;
opacity: 1;

display: flex;
justify-content: space-evenly;
align-items: center;
gap: 5%;

font-family: 'Jockey One', sans-serif;
color: black;
padding: 10px;

.routerLink {
    text-decoration: none;
    color: black;
}

img {
    width: 30%;
    margin-right: 30%;
}
}

@media only screen and (min-width: 768px) {

nav {

    font-size: 20px;
    
    img {
        width: 10%;
        margin-right: 1200px;
    }
}
}

</style>