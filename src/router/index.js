import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import About from "../views/About.vue";
import Preferences from "../views/Preferences.vue";
import Recommendations from "../views/Recommendations.vue";
import EateryList from "../views/EateryList.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import { Auth } from 'aws-amplify';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: false}
  },
  {
    path: '/diningpreferences',
    name: 'Preferences',
    component: Preferences,
    meta: {requiresAuth: true}
  },
  {
    path: '/diningpreferences/:id',
    name: 'Recommendations',
    component: Recommendations,
    meta: {requiresAuth: true}
  },
  {
    path: '/eaterylist',
    name: 'EateryList',
    component: EateryList,
    meta: {requiresAuth: true}
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {requiresAuth: false}
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {requiresAuth: false}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next()
  }

})

export default router
