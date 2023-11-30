import {ref, reactive} from "vue";
import {defineStore} from "pinia";


export const useAuthStore = defineStore('auth', () => {

    const user = reactive([
        {
            email: 'email@email.com',
            password: 'my-password ',
            isAuthenticated: false
        },
       
    ])

    return { user }
})