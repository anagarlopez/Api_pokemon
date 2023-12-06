<script setup>

</script>

<template>

  <header>
      <nav>
        <img src="./../assets/photos/" alt="Logo_pokemon">
  </nav>
     
</header>

</template>


<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css2?family=Jockey+One&family=Zen+Kaku+Gothic+Antique:wght@300;400&display=swap');
  nav {

background-color: #B1230F;
width: 100%;
height: 20vh
opacity 2;

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
*{
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