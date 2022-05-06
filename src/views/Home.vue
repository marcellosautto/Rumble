<template>
  <div class="home">
    <h1 id="title">Welcome to Rumble!</h1>

    <h2>What is Rumble?</h2>
    <p>
      A full-stack web application which provides a list of eateries to the user
      based on their preferences. For instance, if the user wants mexican food
      at a low cost in San Jose within a 10 mile radius, the API will return a
      list of eateries which best fit those preferences
    </p>

    <h2>Example...</h2>
    <div class="examples">
      <img
        src="../assets/images/about-p1.jpg"
        alt="Preview of preference selection interface"
      />
      <img
        src="../assets/images/about-p2.jpg"
        alt="Preview of preference selection interface"
      />
    </div>

    <h2>How Does Rumble Work?</h2>
    <p>
      The application utilizes the Yelp API, specifically the business search
      endpoint, to make a GET request with the paramaters inserted by the user.
    </p>

    <div class="examples">
      <img src="../assets/images/about-p3.png" alt="" />
    </div>

    <h2>Frameworks and APIs</h2>

    <p>Vue.js | GraphQL | Babel | Vuex | AWS Amplify | Yelp API</p>

    <!-- <button class="btn btn-info">
      Share on Twitter
        <ShareNetwork
            network="twitter"
            url="https://dev.d2m57z2t2gp150.amplifyapp.com/"
            title="Hungry? Go check out Rumble for personalized food recommendations!"
            description="I was just recommended these resturants">
        </ShareNetwork>
    </button> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "Home",
  components: {
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

h1 {
  text-align: center;
}
h2 {
  color: gray;
}
.examples > img{
  width: 50%;

}


</style>