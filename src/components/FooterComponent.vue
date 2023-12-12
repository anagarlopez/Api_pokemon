<script setup>

</script>

<template>
    <footer>
    <div class="footer_container">
        <h3>©Todos los derechos reservados.2023. Pokemon-Games</h3>
        <div class="rrss">
            <img src="./../assets/photos/iconos/facebook.png" alt="">
            <img src="/src/assets/photos/iconos/instagram.png" alt="instagram">
            <img src="/src/assets/photos/iconos/youtube.png" alt="youtube">
            <img src="/src/assets/photos/iconos/mail.png" alt="email">
        </div>
    </div>

    </footer>
</template>

<style lang="scss" scoped>
    @import './../../styles.scss';
    @import url('https://fonts.googleapis.com/css2?family=Jockey+One&family=Zen+Kaku+Gothic+Antique:wght@300;400&display=swap');

    .footer_container {
    display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: 100%;
  background-color:  #B1230F;
  h3{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 1.5rem;
    padding: 1%;
  }
    
}


@media only screen and (min-width: 768px) {
    .footer {
        background-color: #B1230F;
        opacity: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        .rrss {
            display: flex;
            justify-content: flex-end;
            margin-right: 5px;

            img {
                width: 3%;
                padding: 9px;
            }
        }

        h3 {
            color: white;
            font-size: 20px;
            margin-left: 10px;
            font-family: 'Jockey One', sans-serif;
        }
    }
}
    
</style>