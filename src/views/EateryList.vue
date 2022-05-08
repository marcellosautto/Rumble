<template>
  <div class="eaterylist">
    <h1 class="text-center title">{{ user.username }}'s Favorite Eateries</h1>

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <!-- <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
        ></button>
      </div> -->

      <div class="carousel-inner">
        <div
          v-for="(photo, i) in gallery"
          :key="i"
          :class="i == 0 ? 'carousel-item active' : 'carousel-item'"
        >
          <img
            :src="photo"
            class="carousel-img d-block w-100"
            alt="Images of a resturant"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import * as Bootstrap from "bootstrap";
//import { mapGetters } from "vuex";
import DiningPreference from "@/models/DiningPreference";
//import User from "@/models/User"

export default {
  mounted() {
    var myCarousel = document.querySelector("#myCarousel");
    new Bootstrap.Carousel(myCarousel);
    DiningPreference.dispatch("getDiningPreferencesData");
    this.getRecommendationImages();
  },
  data: () => ({
    gallery: [],
  }),
  methods: {
    async getRecommendationImages() {
      //console.log(this.diningPreferences)
      this.diningPreferences.forEach(async (preference) => {
        const det_preference = await DiningPreference.dispatch(
          "getDiningPreference",
          preference["id"]
        );
        //console.log(preference['id'])
        //console.log(det_preference)
        const recommendations =
          det_preference.data.getDiningPreference.recommendation.businesses;
        //console.log(recommendations)
        recommendations.forEach((business) => {
          this.gallery.push(business.image_url);
        });
      });
      console.log(this.gallery);
    },
  },
  computed: {
    user() {
      return this.$store.state.entities.users.user;
    },
    diningPreferences() {
      return this.$store.state.entities.diningPreferences.diningpreferences;
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 50%;
  height: 50%;
  margin: auto;
}

.carousel-img {
  float: left;
  width: 200px;
  height: 500px;
  object-fit: cover;
}

.title {
  margin: 1em;
  font-size: 3.7em;
}
</style>
