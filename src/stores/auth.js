import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const useAuthStore = defineStore('auth', ()=>{

    const user = reactive(
        {
            username: 'pokemon',
            password: '123456',
            isAuthenticated: false
        }
    )

    return {user}
})