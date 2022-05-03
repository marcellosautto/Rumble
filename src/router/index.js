import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import About from "../views/About.vue";
import Preferences from "../views/Preferences.vue";
import Recommendations from "../views/Recommendations.vue";
import EateryList from "../views/EateryList.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import { Auth } from 'aws-amplify';

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: About,
  //   meta: {requiresAuth: false}
  // },
  {
    path: '/diningpreferences',
    name: 'Preferences',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Preferences,
    meta: {requiresAuth: true}
  },
  {
    path: '/diningpreferences/:id',
    name: 'Recommendations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Recommendations,
    meta: {requiresAuth: true}
  },
  {
    path: '/eaterylist',
    name: 'EateryList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EateryList,
    meta: {requiresAuth: true}
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignIn,
    meta: {requiresAuth: false}
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
