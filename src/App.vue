<script setup>
import "@aws-amplify/ui-vue/styles.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import Login from "./components/Login.vue";
import RecommendationForum from "./components/RecommendationForum.vue";

Amplify.configure(awsconfig);
</script>

<template>
  <div id="app">
    <h1 class="title">Rumble</h1>

    <login />

    <recommendation-forum />

    <button v-on:click="createRecommendation">Create Recommendation</button>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createRecommendation } from "./graphql/mutations.ts";
import { listRecommendations } from "./graphql/queries.ts";
import { onCreateRecommendation } from "./graphql/subscriptions.ts";

import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "App",
  components: {
    Login,
    RecommendationForum
  },
  created() {
    onAuthUIStateChange((state, user) => {
      if (state === AuthState.SignedIn) {
        this.user = user;
        this.getData();
      }
    });
    this.getRecommendations();
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
    async createRecommendation() {
      const { name, rating, cost, location, origins, service } = this;
      if (!name || !rating || !cost || !location || !origins || !service)
        return;
      const recommendation = { name, rating, cost, location, origins, service };
      await API.graphql({
        query: createRecommendation,
        variables: { input: recommendation },
      });
      (this.name = ""),
        (this.rating = ""),
        (this.cost = ""),
        (this.location = ""),
        (this.origins = ""),
        (this.service = "");
    },
    async getRecommendations() {
      const recommendations = await API.graphql({
        query: listRecommendations,
      });
      this.recommendations = recommendations.data.listRecommendations.items;
    },
    subscribe() {
      API.graphql({ query: onCreateRecommendation }).subscribe({
        next: (eventData) => {
          let recommendation = eventData.value.data.onCreateRecommendation;
          if (
            this.recommendations.some(
              (item) => item.name === recommendation.name
            )
          )
            return; // remove duplications
          this.recommendations = [...this.recommendations, recommendation];
        },
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

#app{
  background-color: rgb(9, 171, 192);
}
.title{
  text-align: center;
  font-family: 'Varela Round', sans-serif;
}
</style>