<script setup>
    currentYear: new Date().getFullYear(),

</script>

<template>
  <header>
    <div class="header">
      <nav>
    <img src="./../assets/photos pokemon/Logo_de_Pokémon_HOME.png" alt="Logo_pokemon" />
    <RouterLink to="/about">LOG IN<img src="./../assets/photos pokemon/Pokebola.png" alt="pokeball" /></RouterLink>
  </nav>
  </div>
  </header>
<RouterView />



    <footer>
      <p>© 2023 Pokemon-Games. Todos los derechos reservados.</p>
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

 footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>