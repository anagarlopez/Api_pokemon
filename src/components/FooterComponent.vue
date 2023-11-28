<script setup>

</script>

<template>

    <div class="footer">

        <p>©Todos los derechos reservados.2023. Pokemon-Games</p>

        <div class="rrss">

            <img src="./../assets/photos/iconos/facebook.png" alt="">
            <img src="/src/assets/photos/iconos/instagram.png" alt="instagram">
            <img src="/src/assets/photos/iconos/youtube.png" alt="youtube">
            <img src="/src/assets/photos/iconos/mail.png" alt="email">
        </div>
    </div>

</template>

<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css2?family=Jockey+One&family=Zen+Kaku+Gothic+Antique:wght@300;400&display=swap');

    .footer {

        display: none;
        
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

        p {
            color: white;
            font-size: 20px;
            margin-left: 10px;
            font-family: 'Jockey One', sans-serif;
        }
    }
}
    
</style>