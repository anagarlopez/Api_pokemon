import {ref, reactive} from "vue";
import {defineStore} from "pinia";


export const useAuthStore = defineSore('auth', () => {

    const user = reactive([
        {
            email: 'email',
            password: 'my-password ',
            isAuthenticated: false
        },
       
    ])

    return { user }
})