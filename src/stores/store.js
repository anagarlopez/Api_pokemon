// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore({
  // nombre de la tienda
  id: 'pokedex',
  // estado inicial de tu tienda
  state: () => ({
    favoritos: []
  }),
  // funciones para manipular el estado
  actions: {
    agregarFavorito(pokemon) {
      // Evita duplicados
      if (!this.favoritos.find(fav => fav.id === pokemon.id)) {
        this.favoritos.push(pokemon)
      }
    },
    removerFavorito(pokemon) {
      this.favoritos = this.favoritos.filter(fav => fav.id !== pokemon.id)
    }
  }
})
