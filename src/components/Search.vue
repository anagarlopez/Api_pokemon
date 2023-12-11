<script setup>
<script src="https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

const app = Vue.createApp({
    data() {
      return {
        searchTerm: '',
        items: [], // Replace with your API data
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
    methods: {
      search() {
        // You can make an API request here to fetch the data
        // and update the 'items' array accordingly
        // For simplicity, I'm using a static array as an example
        // Replace this with your actual API call.
        this.items = [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
          // Add more items as needed
        ];
      },
    },
    mounted() {
      // Initial data fetch
      this.search();
    },
  });

  app.mount('#app');

</script>


<template>
    
<div id="app" class="container mt-5">
  <div class="mb-3">
    <input v-model="searchTerm" @input="search" class="form-control" placeholder="Search...">
  </div>

  <ul class="list-group">
    <li v-for="item in filteredItems" :key="item.id" class="list-group-item">
      {{ item.name }}
    </li>
  </ul>
</div>

</template>

<style lang="scss" scoped>

</style>