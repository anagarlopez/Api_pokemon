import {ref, reactive} from "vue";
import {defineStore} from "pinia";


export const useUseStore = defineSore('users', () => {

    const users = reactive([
        {
            username: 'admin',
            password: 'dflkldfkldk',
            isAuthenticated: true
        },
        {
            name: 'Eva',
            isPresent: false
        },
    ])

    return { users }
})