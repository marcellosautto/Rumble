<template>
  <div class="about">
    <h1>About Rumble</h1>
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
  </div>
</template>
<style scoped>
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
