<template>
  <div class="home">
    <login />
    <h1 id="title">Preferences</h1>
    <preferences-forum />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";
import PreferencesForum from "../components/PreferenceForum.vue";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "Home",
  components: {
    Login,
    PreferencesForum,
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
      preferences: [],
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
