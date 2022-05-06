<script setup>
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
</script>

<template>
  <div id="app">
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/Sidebar/state.ts";
//import { mapActions } from "vuex";
import User from './models/User'

export default {
  name: "App",
  mounted() {
    //this.authAction();
    User.dispatch("authAction")
  },
  setup() {
    return { sidebarWidth };
  },
  methods: {
    //...mapActions("auth", ["authAction"]),
  },
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Staatliches&display=swap");

* {
  background-image: linear-gradient(
    270deg,
    rgb(228, 228, 228),
    rgb(247, 247, 247)
  );
}

#app {
  font-family: "Bree Serif", serif;
  height: 100vh;
  padding: 0.5em;
}
.title {
  text-align: center;
}
</style>
