<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <div class="auth__div">
        <h1>Hello, {{ user.username }}!</h1>
        <button @click="signOut" class="create__rec__btn">Sign Out</button>
      </div>
    </template>
  </authenticator>
</template>

<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
</script>

<script>
export default {
  name: "Login",
  props: {},
};
</script>

<style scoped>
.title {
  text-align: center;
}

.auth__div {
  text-align: right;
}
</style>
