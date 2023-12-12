<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<template>
   <footer id="footer" style="background-color: rgba(177, 35, 15, 0.8)">
    <div class="container pt-1">
    <section class="d-flex justify-content-end mb-1">
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-sm text-body m-1"
        href="https://facebook.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><img src="./../assets/photos/iconos/facebook.png" class="img-fluid icon"></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-sm text-body m-1"
        href="https://instagram.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><img src="/src/assets/photos/iconos/instagram.png" alt="instagram" class="img-fluid icon"></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-sm text-body m-1"
        href="https://youtube.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><img src="/src/assets/photos/iconos/youtube.png" alt="youtube" class="img-fluid icon"></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-sm text-body m-1"
        href="https://gmail.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><img src="/src/assets/photos/iconos/mail.png" alt="email" class="img-fluid icon"></a>

    </section>
    <div class="pb-3 text-center text-white">
    © 2023 Todos los derechos reservados.Pokemon-Games.
  </div>

  </div>
    </footer>
    </template>

<style lang="scss" scoped>
@import './../../styles.scss';
@import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

footer{
  font-family: 'Jockey One', sans-serif;
}
.icon{
    height: 50px;
    width: 50px; 
}
</style>