<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    types: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const selectedType = ref(props.value)
    return {
      selectedType,
      types: props.types
    }
  }
})
</script>
<template>
    <div>
      <label>Filtrar por categoría:</label>
      <select v-model="selectedType" @input="$emit('input', selectedType)">
        <option value="">Todos</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>
  </template>