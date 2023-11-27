<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"

export default {
  components: {
    Header,
  },
};

</script>

<template>
   <div>
    <Header />
    

    <Footer />
    
  </div>
</template>

<style lang="scss" scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}
</style>