import {ref, reactive} from "vue";
import {defineStore} from "pinia";


export const useAuthStore = defineStore('auth', () => {

    const user = reactive([
        {
            email: 'email',
            password: 'my-password ',
            isAuthenticated: false
        },
       
    ])

    return { email }
})