<template>
  <div class="rec__forum">

    <div class="rf_input">
      <label for="name">Name </label> <br />
    <input type="text" v-model="name" placeholder="Ex. Olive Garden" /> <br />
    </div>
    <div class="rf_input">
      <label for="rating">Rating </label><br />
    <input type="text" v-model="rating" placeholder="Ex. 5/5" /><br />
    </div>
    <div class="rf_input">
       <label for="origins">Origin </label><br />
    <input type="text" v-model="origins" placeholder="Ex. Italian" /><br />
    </div>
    <div class="rf_input">
      <label for="cost">Cost </label><br />
    <input type="text" v-model="cost" placeholder="Ex. $$" /><br />
    </div>
    <div class="rf_input">
      <label for="location">Location </label><br />
    <input
      type="text"
      v-model="location"
      placeholder="Ex. Thousand Oaks"
    /><br />
    </div>
    <div class="rf_input">
      <label for="service">Service </label><br />
    <input type="text" v-model="service" placeholder="Ex. Resturant" /><br />
    </div>    
    
  </div>
</template>

<script>
export default {
  name: "RecommendationForum"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.rec__forum{
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    font-family: 'Staatliches', cursive;
    margin-top: 10px;
    
}

.rf_input{
padding: 5px;
background-color: azure;
box-shadow: 5px 10px #5a5a5a49;
margin: 5px;
text-align: center;
font-size: 1.3em;

}

input {
border: 1px rgb(190, 190, 190) solid;
border-radius: 3px;

}


</style>
