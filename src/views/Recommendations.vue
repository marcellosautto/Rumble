<template>
  <div>
    <h3>Recommendations</h3>

    <div id="example-1">
      <span
        v-for="recommendation in recommendations"
        :key="recommendation.name"
      >
        Name: {{ recommendation.name }} <br />
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
    recommendations: [],
    preferenceCategory: "",
  }),
  methods: {
    // async onFileChange(file) {
    //   if (!file.target || !file.target.files[0]) {
    //     return;
    //   }
    //   try {
    //     await this.$store.dispatch(
    //       "diningPreferenceInfo/createRecommendation",
    //       {
    //         file: file.target.files[0],
    //         id: this.id,
    //       }
    //     );
    //     this.getRecommendations();
    //   } catch (error) {
    //     console.log("Error create recommendation", error);
    //   }
    // },
    async getRecommendations() {
      const preference = await DiningPreference.dispatch(
        "getDiningPreference",
        this.id
      );
      this.recommendations =
        preference.data.getDiningPreference.recommendation.businesses;
      this.preferenceCategory = preference.data.getDiningPreference.category;
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
