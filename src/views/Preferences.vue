<template>
  <h1 id="title">Preferences</h1>
  <div class="rec__forum">
    <div class="rf_input">
      <label for="category">Category </label> <br />
      <input type="text" v-model="category" placeholder="Ex. Mexican Food" />
      <br />
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
      <input type="text" v-model="distance" placeholder="Ex. 5 miles" /><br />
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
    @click="openPreferenceDetail(diningpreference)"
  >
    <div class="cursor-pointer preference_item">
      {{ diningpreference.category }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async mounted() {
    this.$store.dispatch("diningPreferenceInfo/getDiningPreferencesData"); //NOT WORKING
  },
  data: () => ({
    category: "",
    rating: "",
    cost: "",
    location: "",
    distance: "",
    service: "",
    hours: "",
  }),
  methods: {
    openPreferenceDetail(diningPreference) {
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
        !this.service ||
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
        service: this.service,
        hours: this.hours,
      };

      this.$store.dispatch(
        "diningPreferenceInfo/createDiningPreference",
        newDiningPreference
      );
    },
    async clearDiningPreferences() {
      this.$store.dispatch("diningPreferenceInfo/clearDiningPreferences");
    },
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      diningpreferences: "diningPreferenceInfo/diningpreferences"
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

.rec__forum input {
  height: 2.3em;
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
