import {ref, reactive} from "vue";
import {defineStore} from "pinia";


export const useAuthStore = defineStore('auth', () => {

    const user = reactive([
        {
            username: 'pokemon',
            password: '123456',
            isAuthenticated: false
        },
       
    ])

    return { user }
})