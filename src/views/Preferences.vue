<template>
  <h1 id="title">Preferences</h1>
  <div class="rec__forum">
    <div class="rf_input">
      <label for="category" class="subhead">Category </label> <br />
      <select v-model="category" name="category" id="category" required>
        <option value="Bistros">Bistros</option>
        <option value="Barbeque">Barbeque</option>
        <option value="Cafes">Cafes</option>
        <option value="Chinese">Chinese</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Sushi">Sushi</option>
        <option value="Mexican">Mexican</option>
        <option value="Pizza">Pizza</option>
        <option value="Sandwiches">Sandwiches</option>
        <option value="Thai">Thai</option>
      </select>
      <br />
    </div>
    <div class="rf_input">
      <label for="rating" class="subhead">Minimum Rating </label><br />
      <vue3starRatings
        v-model="rating"
        :step="0.5"
        disableClick=false
        starColor="#fff"
      />
    </div>
    <div class="rf_input">
      <label for="cost" class="subhead">Cost</label><br />
      <select v-model="cost" name="cost" id="cost" required>
        <option value="$">&#60; $10</option>
        <option value="$$">$11-$30</option>
        <option value="$$$">$31-$60</option>
        <option value="$$$$">&#62; $61</option>
      </select>
    </div>
    <div class="rf_input">
      <label for="location" class="subhead">Location </label><br />
      <vue-google-autocomplete
        id="map"
        v-model="location"
        classname="form-control"
        placeholder="Ex. Northridge"
        v-on:placechanged="getAddressData"
      >
      </vue-google-autocomplete>
    </div>
    <div class="rf_input">
      <label for="distance" class="subhead">Search Radius (in Miles) </label><br />
      <input type="text" v-model="distance" placeholder="Ex. 5" /><br />
    </div>
    <div class="rf_input">
      <label for="hours" class="subhead">Hours </label><br />
      <select v-model="hours" name="hours" id="hours" required>
        <option value="true">Open Now</option>
        <option value="false">No Preference</option>
      </select>
    </div>
  </div>

  <div class="btn__container">
    <button class="create__rec__btn" @click="createDiningPreference()">
      Create Preference
    </button>

    <button class="del__rec__btn" @click="clearDiningPreferences()">
      Clear Preferences
    </button>
  </div>

  <div class="seperator"></div>

  <h3 class="text-center">List of Preferences</h3>

  <div
    v-for="(diningpreference, i) in diningpreferences"
    :key="i"
    class="preference_list"
    role="button"
    @click="openRecommendations(diningpreference)"
  >
    <div class="cursor-pointer preference_item">
      {{ diningpreference.category }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import vue3starRatings from "vue3-star-ratings";
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  components: {
    vue3starRatings,
    VueGoogleAutocomplete,
  },
  async mounted() {
    this.$store.dispatch("diningPreferenceInfo/getDiningPreferencesData"); //NOT WORKING
  },
  data: () => ({
    category: "",
    rating: "",
    cost: "",
    location: "",
    distance: "",
    hours: "",
  }),
  methods: {
    openRecommendations(diningPreference) {
      this.$router.push(`/diningpreferences/${diningPreference.id}`);
    },
    async createDiningPreference() {
      this.error = "";
      if (
        !this.category ||
        !this.rating ||
        !this.cost ||
        !this.location ||
        !this.distance ||
        !this.hours
      ) {
        return;
      }

      const newDiningPreference = {
        category: this.category,
        rating: this.rating,
        cost: this.cost,
        location: this.location,
        distance: this.distance,
        hours: this.hours,
      };

      this.$store.dispatch(
        "diningPreferenceInfo/createDiningPreference",
        newDiningPreference
      );
    },
    async deleteDiningPreference() {
      this.$store.commit("diningPreferenceInfo/deleteDiningPreference");
    },
    async clearDiningPreferences() {
      this.$store.commit("diningPreferenceInfo/resetState");
    },
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      diningpreferences: "diningPreferenceInfo/diningpreferences",
    }),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
#title {
  position: sticky;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
  font-size: 2.5em;
  color: hsl(191, 78%, 13%);
}
.rec__forum {
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  font-family: "Staatliches", cursive;
  margin-top: 10vh;
}

.rec__forum select {
  height: 1.5em;
  font-size: 1.5em;
}

.subhead {
  font-size: 1.4em;
}

.rf_input {
  padding: 5px;
  background-color: rgba(86, 86, 86, 0.61);
  box-shadow: 5px 10px #46444438;
  margin: 5px;
  text-align: center;
  font-size: 1.3em;
  color: rgb(22, 22, 22);
}

.btn__container {
  text-align: center;
  margin-top: 10px;
}
.create__rec__btn {
  border-radius: 5px;
  border: 0;
  background-color: rgb(71, 71, 71);
  color: rgb(250, 250, 250);
  font-size: 1.1em;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  margin: 0 5px 0 5px;
  height: 2.3em;
  font-family: "Bree Serif", serif;
}

.create__rec__btn:hover {
  background-color: rgb(45, 45, 45);
  cursor: pointer;
}

.del__rec__btn {
  border-radius: 5px;
  border: 0;
  background-color: rgb(188, 91, 91);
  color: rgb(250, 250, 250);
  font-size: 1.1em;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  margin: 0 5px 0 5px;
  height: 2.3em;
  font-family: "Bree Serif", serif;
}

.del__rec__btn:hover {
  background-color: rgb(204, 101, 101);
  cursor: pointer;
}

.preference_list {
  background-color: rgb(173, 224, 194);
  width: 50%;
  margin: auto;
}

.preference_list:hover {
  background-color: rgba(173, 224, 194, 0.691);
}

.preference_item {
  margin: 5px;
  text-align: center;
}

.seperator {
  border: 1px solid black;
  margin: 15px 0 15px 0;
}

input {
  border: 1px rgb(190, 190, 190) solid;
  border-radius: 3px;
}
</style>
