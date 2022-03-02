<template>
  <div class="rec__forum">
    <div class="rf_input">
      <label for="category">Category </label> <br />
    <input type="text" v-model="category" placeholder="Ex. Mexican Food" /> <br />
    </div>
    <div class="rf_input">
      <label for="rating">Rating </label><br />
    <input type="text" v-model="rating" placeholder="Ex. 5/5" /><br />
    </div>
    <div class="rf_input">
      <label for="cost">Cost</label><br />
      <select v-model="cost" name="cost" id="cost" required>
        <option value="$">&#60; $10</option>
        <option value="$$">$11-$30</option>
        <option value="$$$">$31-$60</option>
        <option value="$$$$">&#62; $61</option>
      </select>
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
      <label for="distance">Distance </label><br />
    <input
      type="text"
      v-model="distance"
      placeholder="Ex. 5 miles"
    /><br />
    </div>
    <div class="rf_input">
      <label for="service">Service </label><br />
    <input type="text" v-model="service" placeholder="Ex. Resturant" /><br />
    </div>
    <div class="rf_input">
       <label for="hours">Hours </label><br />
    <input type="text" v-model="hours" placeholder="Ex. 8PM-10PM" /><br />
    </div> 
    
  </div>

<div class="btn__container">
  <button class="create__rec__btn" v-on:click="createDiningPreference">Create Preference</button>
  <button class="create__rec__btn" v-on:click="listDiningPreferences">List Preferences</button>
  </div>
</template>

<script>

import { API } from "aws-amplify";
import { createDiningPreference } from "../graphql/mutations";
import { listDiningPreferences } from "../graphql/queries";
import { onCreateDiningPreference } from "../graphql/subscriptions";

export default {
  name: "PreferenceForum",
  data() {
    return {
      category: '',
      rating: '',
      cost: '',
      location: '',
      distance: '',
      service: '',
      hours: ''
    }
  },
  methods: {
      async createDiningPreference() {
      const { category, rating, cost, location, distance, service, hours } = this;
      if (!category || !rating || !cost || !location || !distance || !service || !hours)
        return;
      const preference = { category, rating, cost, location, distance, service, hours };
      
      await API.graphql({
        query: createDiningPreference,
        variables: { input: preference },
      });
      (this.category = ""),
        (this.rating = ""),
        (this.cost = ""),
        (this.location = ""),
        (this.distance = ""),
        (this.service = ""),
        (this.hours = "");
    },
    async getDiningPreference() {
      const preferences = await API.graphql({
        query: listDiningPreferences,
      });
      this.preferences = preferences.data.listDiningPreferences.items;
    },
    subscribe() {
      API.graphql({ query: onCreateDiningPreference }).subscribe({
        next: (eventData) => {
          let preference = eventData.value.data.onCreateDiningPreference;
          if (
            this.preferences.some(
              (item) => item.name === preference.name
            )
          )
            return; // remove duplications
          this.preferences = [...this.preferences, preference];
        },
      });
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.rec__forum{
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    font-family: 'Staatliches', cursive;
    margin-top: 10vh;
    
}

.rec__forum input{
  height: 2.3em;
}

.rf_input{
padding: 5px;
background-color: rgba(4, 125, 149, 0.61);
box-shadow: 5px 10px #46444438;
margin: 5px;
text-align: center;
font-size: 1.3em;
color: rgb(22, 22, 22);

}

.btn__container{
  text-align: center;
  margin-top: 10px;
}
.create__rec__btn{
  border-radius: 5px;
  border: 0;
  background-color: hsl(190deg, 95%, 30%);
  color:rgb(250, 250, 250);
  font-size: 1.1em;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  margin: 0 5px 0 5px;
  height: 2.3em;
  font-family: 'Bree Serif', serif;
  
}

.create__rec__btn:hover{
  background-color: rgb(4, 83, 99);
  cursor:pointer;
}

input {
border: 1px rgb(190, 190, 190) solid;
border-radius: 3px;

}

</style>
