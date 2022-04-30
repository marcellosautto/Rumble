
import {createStore} from 'vuex'
import {auth} from "./auth/auth.js";
import { diningPreferenceInfo } from './preferences/diningpreferences.js';


const store = createStore({
    modules: {
        auth,
        diningPreferenceInfo
    }
})

export default store;