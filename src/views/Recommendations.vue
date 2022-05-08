<template>
  <div>
    <h3>Recommendations</h3>

    <div id="example-1" class="container row">
      <span
        v-for="recommendation in recommendations"
        :key="recommendation.name"
        class="col col-sm-3"
      >
        <div class="card" style="width: 18rem">
          <img :src="recommendation.image_url" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ recommendation.name }}</h5>
            <div class="card-text">
              Distance: {{ (recommendation.distance / 1609).toFixed(2) }} Miles
              <br />
              Rating: {{ recommendation.rating }} / 5 <br />
              Price: {{ recommendation.price }}<br />
              Phone Number: {{ recommendation.display_phone }} <br />
            </div>

            <a :href="recommendation.url" class="btn btn-primary"
              >Check It Out!</a
            >
            <button class="btn btn-info">
              <ShareNetwork
                network="twitter"
                url="https://news.vuejs.org/issues/180"
                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                quote="The hot reload is so fast it\'s near instant. - Evan You"
                hashtags="vuejs,vite"
              >
                Share on Twitter
              </ShareNetwork>
            </button>
          </div>
        </div>

        <br />
      </span>
    </div>
  </div>
</template>

<script>
import DiningPreference from "@/models/DiningPreference";

export default {
  mounted() {
    this.getRecommendations();
  },
  data: () => ({
    recommendations: [],
  }),
  methods: {
    async getRecommendations() {
      //NOT WORKING
      const preference = await DiningPreference.dispatch(
        "getDiningPreference",
        this.id
      );
      this.recommendations =
        preference.data.getDiningPreference.recommendation.businesses;

      console.log(this.recommendations);
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
.card-img-top {
  float: left;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.open {
  display: contents;
  color: rgb(1, 196, 1);
}

.closed {
  display: none;
}
</style>
