
//import {createStore} from 'vuex'


import VuexORM from '@vuex-orm/core';
import Vuex from 'vuex';
import {diningPreferenceInfo} from './preferences/diningpreferences';
import DiningPreference from '../models/DiningPreference';

import {auth} from "./auth/auth.js";
import User from "../models/User.js";

const database = new VuexORM.Database();

database.register(DiningPreference, diningPreferenceInfo)
database.register(User, auth)

const store = new Vuex.Store({
    plugins: [VuexORM.install(database)]
})

export default store;