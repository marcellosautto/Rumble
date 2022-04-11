
import {createStore} from 'vuex'
import {auth} from "./auth/auth.js";


const store = createStore({
    modules: {
        auth,
    }
})

export default store;