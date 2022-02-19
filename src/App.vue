<script setup>
import "@aws-amplify/ui-vue/styles.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import Login from "./components/Login.vue";
import RecommendationForum from "./components/RecommendationForum.vue";
import Sidebar from "./components/Sidebar.vue";

Amplify.configure(awsconfig);

</script>

<template>
  <div id="app">
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth}">
      <router-view />
    </div>

    <login />

    <recommendation-forum />

    
  </div>
</template>

<script>

import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";


export default {
  name: "App",
  components: {
    Login,
    RecommendationForum,
    Sidebar,
  },
  created() {
    onAuthUIStateChange((state, user) => {
      if (state === AuthState.SignedIn) {
        this.user = user;
      }
    });
  },
  data() {
    return {
      user: {},
      name: "",
      rating: "",
      cost: "",
      location: "",
      origins: "",
      service: "",
      recommendations: [],
      loading: true,
    };
  },
  methods: {

  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Staatliches&display=swap');
#app{
  background-color: rgb(9, 171, 192);
  font-family: 'Bree Serif', serif;
}

.title{
  text-align: center;
}

</style>