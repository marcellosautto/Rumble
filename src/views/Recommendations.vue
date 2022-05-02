<template>
  <div>
    <h3>Recommendations</h3>

    <ul id="example-1">
      <li v-for="recommendation in recommendations" :key="recommendation.name">
        {{ recommendation.name }}
      </li>
    </ul>
  </div>
</template>

<script>
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
      const preference = await this.$store.dispatch(
        "diningPreferenceInfo/getDiningPreference",
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

<style></style>
