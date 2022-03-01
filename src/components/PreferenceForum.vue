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
      <label for="service">Service </label><br />
    <input type="text" v-model="service" placeholder="Ex. Resturant" /><br />
    </div>    
    
  </div>

<div class="btn__container">
  <button class="create__rec__btn" v-on:click="createPreference">Create Preference</button>
  <button class="create__rec__btn" v-on:click="listPreferences">List Preferences</button>
  </div>
</template>

<script>

import { API } from "aws-amplify";
import { createPreference } from "../graphql/mutations.ts";
import { listPreferences } from "../graphql/queries.ts";
import { onCreatePreference } from "../graphql/subscriptions.ts";

export default {
  name: "PreferenceForum",
  data() {
    return {
      name: '',
      rating: '',
      cost: '',
      location: '',
      origins: '',
      service: '',
    }
  },
  methods: {
      async createPreference() {
      const { name, rating, cost, location, origins, service } = this;
      if (!name || !rating || !cost || !location || !origins || !service)
        return;
      const preference = { name, rating, cost, location, origins, service };
      
      await API.graphql({
        query: createPreference,
        variables: { input: preference },
      });
      (this.name = ""),
        (this.rating = ""),
        (this.cost = ""),
        (this.location = ""),
        (this.origins = ""),
        (this.service = "");
    },
    async getPreferences() {
      const preferences = await API.graphql({
        query: listPreferences,
      });
      this.preferences = preferences.data.listPreferences.items;
    },
    subscribe() {
      API.graphql({ query: onCreatePreference }).subscribe({
        next: (eventData) => {
          let preference = eventData.value.data.onCreatePreference;
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
    margin-top: 10px;
    
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
