<script setup>

</script>

<template>

  <header>
    <nav class="navbar" style="background-color: rgba(177, 35, 15, 0.8)">
       <div class="contenedor-flex">

        <div class="columna">
        <img src="./../assets/photos/Logos/Logo_de_Pokémon_HOME.png" alt="logo" class="logo">
        </div>

        <div class="columna">
      <div class="button_bola">
      <img src="./../assets/photos/Logos/Pokebola.png" alt="pokebola" class="bola img-fluid pd-4">
      <button class="btn btn-primary px-4 bg-danger-rgb btn-outline-dark pd-4" type="button" href="#component">LOG 0UT</button>
    </div>
    </div> 
</div>
</nav>
     
</header>

</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');
  nav {
    font-family: 'Jockey One', sans-serif;
    .contenedor-flex {
      display: flex;
    }

        img {
        width: 20%;
        }


        .button_bola{
            display: flex;
            flex-direction: column;
            justify-content: right;
            align-items: end;
            padding-right: 10%;
        }
        .btn{
            background-color: #CF6D6D;
        }

    }   

</style>