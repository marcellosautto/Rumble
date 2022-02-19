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
import {sidebarWidth} from './components/Sidebar/state.ts'
export default {
  name: "App",
  components: {
    Sidebar,
  },
  setup(){
    return { sidebarWidth }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Staatliches&display=swap');

*{
  background-color: rgb(9, 171, 192);
}

#app{
  font-family: 'Bree Serif', serif;
  height: 100vh;
  padding: 0.5em;
}
.title{
  text-align: center;
}
</style>