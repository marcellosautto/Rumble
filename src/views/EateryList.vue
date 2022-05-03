<template>
  <div class="eaterylist">
    <h1 class="text-center title">{{ user.username }}'s Favorite Eateries</h1>

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
      v-for="(photo, i) in gallery"
      :key="i"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="photo" class="d-block w-100" alt="..." />
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
import { mapGetters } from "vuex";

export default {
  mounted() {
    var myCarousel = document.querySelector("#myCarousel");
    new Bootstrap.Carousel(myCarousel);
    this.$store.dispatch("diningPreferenceInfo/getDiningPreferencesData");
    this.getRecommendationImages();
  },
  data: () => ({
    gallery: [],
  }),
  methods: {
    async getRecommendationImages() {
      console.log(this.diningPreferences)

      this.diningPreferences.forEach(preference => {
        console.log(preference['id'])
        
        console.log(preference['recommendation'].data)
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      diningPreferences: "diningPreferenceInfo/diningpreferences",
    }),
  },
};
</script>

<style scoped>
.carousel {
  width: 50%;
  height: 50%;
  margin: auto;
}

.title {
  margin: 1em;
  font-size: 3.7em;
}
</style>
