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
      <label for="limit" class="subhead">List Limit (Max. 10)</label><br />
      <input type="text" v-model="limit" placeholder="Ex. 5" /><br />
    </div>
    <div class="rf_input">
      <label for="price" class="subhead">Price</label><br />
      <select v-model="price" name="price" id="price" required>
        <option value="1">&#60; $10</option>
        <option value="2">$11-$30</option>
        <option value="3">$31-$60</option>
        <option value="4">&#62; $61</option>
      </select>
    </div>
    <div class="rf_input">
      <label for="location" class="subhead">Location </label><br />
      <!-- <vue-google-autocomplete
        id="map"
        v-model="location"
        classname="form-control"
        placeholder="Ex. Northridge"
      >
      </vue-google-autocomplete> -->
      <input type="text" v-model="location" placeholder="Ex. Westlake" /><br />
    </div>
    <div class="rf_input">
      <label for="distance" class="subhead">Search Radius (in Miles) </label
      ><br />
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
    <button class="btn btn-primary" @click="createDiningPreference()">
      Create Preference
    </button>

    <!-- <button class="del__rec__btn" @click="clearDiningPreferences()">
      Clear Preferences
    </button> -->
  </div>

  <div class="seperator"></div>

  <h3 class="text-center">List of Preferences</h3>

  <div class="container preference_list">
    <div class="row">
      <div
        class="col-sm-3 card"
        style="width: 18rem"
        v-for="diningpreference in diningpreferences"
        :key="diningpreference"
      >
        <div class="card-body">
          <h4
            class="card-title"
            style="font-weight: "
            role="button"
            @click="openRecommendations(diningpreference)"
          >
            {{ diningpreference.category }}
          </h4>
          <p class="card-text" style="font-style: italic">
            {{ diningpreference.location }}
          </p>
          <button
            @click="updateDiningPreference(diningpreference.id)"
            class="card-link btn btn-info"
          >
            Update
          </button>
          <button
            @click="deleteDiningPreference(diningpreference.id)"
            class="card-link btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  components: {
    //VueGoogleAutocomplete,
  },
  async mounted() {
    this.$store.dispatch("diningPreferenceInfo/getDiningPreferencesData");
  },
  data: () => ({
    category: "",
    limit: 1,
    price: "2",
    location: "San Jose",
    distance: 10,
    hours: "true",
    token:
      "9mMmTKly_zcp7ACBIKuGgVZOvapY8rI3bvv-k39C5sz-ZCUCdpstKoe2N4LLWkDMUYT8fmimrgabuRQYaiJItY8CDP6Ub1bqQZCOz6kMEoo4ZmLqP6rbkePpj8lpYnYx",
  }),
  methods: {
    openRecommendations(diningPreference) {
      this.$router.push(`/diningpreferences/${diningPreference.id}`);
    },
    async getYelpRecommendations() {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer 9mMmTKly_zcp7ACBIKuGgVZOvapY8rI3bvv-k39C5sz-ZCUCdpstKoe2N4LLWkDMUYT8fmimrgabuRQYaiJItY8CDP6Ub1bqQZCOz6kMEoo4ZmLqP6rbkePpj8lpYnYx"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        this.hours == true
          ? `http://localhost:8080/v3/businesses/search?categories=${this.category}&location=${this.location}&limit=${this.limit}&radius=${this.distance}&price=${this.price}&open_now=${this.hours}`
          : `http://localhost:8080/v3/businesses/search?categories=${this.category}&location=${this.location}&limit=${this.limit}&radius=${this.distance}&price=${this.price}`,
        requestOptions
      );
      // .then((response) => response.json())
      // .then((result) => console.log(result))
      // .catch((error) => console.log("error", error));
      const data = await response.json();
      return data;
    },
    async createDiningPreference() {
      this.error = "";

      if (
        !this.category ||
        !this.limit ||
        !this.price ||
        !this.location ||
        !this.distance ||
        !this.hours
      ) {
        return;
      }

      const newDiningPreference = {
        category: this.category,
        limit: this.limit,
        price: this.price,
        location: this.location,
        distance: this.distance * 1609,
        hours: this.hours,
        recommendation: await this.getYelpRecommendations(),
      };

      this.$store.dispatch(
        "diningPreferenceInfo/createDiningPreference",
        newDiningPreference
      );
    },
    async updateDiningPreference(diningPreferenceId) {
      this.error = "";

      if (
        !this.category ||
        !this.limit ||
        !this.price ||
        !this.location ||
        !this.distance ||
        !this.hours
      ) {
        return;
      }

      const updatedDiningPreference = {
        id: diningPreferenceId,
        category: this.category,
        limit: this.limit,
        price: this.price,
        location: this.location,
        distance: this.distance * 1609,
        hours: this.hours,
        recommendation: await this.getYelpRecommendations(),
      };

      this.$store.dispatch(
        "diningPreferenceInfo/updateDiningPreference",
        updatedDiningPreference
      );
    },
    ...mapActions({
      deleteDiningPreference: "diningPreferenceInfo/deleteDiningPreference",
    }),
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
@import url("https://fonts.googleapis.com/css2?family=Crete+Round&display=swap");
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
  /* background-color: rgb(173, 224, 194); */

  width: 50%;
  margin: auto;
}

.preference_list:hover {
  /* background-color: rgba(173, 224, 194, 0.691); */
}

.preference_item {
  margin: 5px;
  text-align: center;
}

.card {
  background-image: linear-gradient(
    to bottom right,
    rgb(173, 224, 194),
    rgb(119, 183, 146)
  );
  border: 2px solid whitesmoke;
}

.card-body {
  text-align: center;
}
.card-body > h4 {
  font-family: "Courier New", Courier, monospace;
  text-decoration: underline;
  font-family: "Crete Round", serif;
}

.card > h4:hover {
  color: aqua;
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
