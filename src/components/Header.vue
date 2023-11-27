<script setup>
    currentYear: new Date().getFullYear(),

</script>

<template>
  <header>
    <div class="header">
      <nav>
    <img src="./../assets/photos pokemon/Logo_de_Pokémon_HOME.png" alt="Logo_pokemon" />
    <RouterLink to="/about">LOG IN<img src="./../assets/photos pokemon/" alt="pokeball" /></RouterLink>
  </nav>
  </div>
  </header>
<RouterView />



    <footer>
      <p>© {{ currentYear }} Pokemon-Games. Todos los derechos reservados.</p>
    </footer>
</template>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333; 
  color: white;
}

img {
  max-height: 50px;
 }

</style>