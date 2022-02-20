<template>
  <div class="home">
    <h1 id="title">Home Page</h1>
    <login />
    <recommendation-forum />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";
import RecommendationForum from "../components/RecommendationForum.vue";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "Home",
  components: {
    Login,
    RecommendationForum,
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
  methods: {},
};
</script>

<style scoped>
#title{
  position: sticky;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
  font-size: 2.5em;
  color: hsl(191, 78%, 13%);
}

.home {
  margin-bottom: 0;
}


</style>
