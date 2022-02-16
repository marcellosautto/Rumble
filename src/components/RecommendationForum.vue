<template>
  <div id="rec__forum">
    <label for="name">Name: </label>
    <input type="text" v-model="name" placeholder="Ex. Olive Garden" /> <br />
    <label for="rating">Rating: </label>
    <input type="text" v-model="rating" placeholder="Ex. 5/5" /><br />
    <label for="origins">Origin: </label>
    <input type="text" v-model="origins" placeholder="Ex. Italian" /><br />
    <label for="cost">Cost: </label>
    <input type="text" v-model="cost" placeholder="Ex. $$" /><br />
    <label for="location">Location: </label>
    <input
      type="text"
      v-model="location"
      placeholder="Ex. Thousand Oaks"
    /><br />
    <label for="service">Service: </label>
    <input type="text" v-model="service" placeholder="Resturant" /><br />
  </div>
</template>

<script>
export default {
  name: "RecommendationForum"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
#rec__forum{
    font-family: 'Varela Round', sans-serif;
    text-align: center;
    align-content: space-between;
    
}


</style>
