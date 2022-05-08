<template>
  <div>
    <h3>Recommendations</h3>

    <div id="example-1">
      <span
        v-for="recommendation in recommendations"
        :key="recommendation.name"
      >
        <a :href="recommendation.url">Name: {{ recommendation.name }} </a><br />
        Distance: {{ (recommendation.distance / 1609).toFixed(2) }} Miles <br />
        Rating: {{ recommendation.rating }} / 5 <br />
        Price: {{ recommendation.price }}<br />
        Phone Number: {{ recommendation.display_phone }} <br />
        <h6 :class="!recommendation.is_closed ? 'open' : 'closed'">Open Now</h6>
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
    recommendations: []
  }),
  methods: {
    async getRecommendations() { //NOT WORKING
      const preference = await DiningPreference.dispatch(
        "getDiningPreference",
        this.id
      );
      this.recommendations =
        preference.data.getDiningPreference.recommendation.businesses;

      console.log(this.recommendations)
      
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
.open {
  display: contents;
  color: rgb(1, 196, 1);
}

.closed {
  display: none;
}
</style>
