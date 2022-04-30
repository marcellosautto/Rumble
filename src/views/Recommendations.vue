<template>
  <div>
    <h3>Recommendations</h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    recommendations: [],
    preferenceCategory: ""
  }),
  methods: {
    async getRecommendations(){
      const preference = await this.$store.dispatch("diningPreferenceInfo/getDiningPreference", this.id);
      this.recommendations = preference.data.getDiningPreference.recommendations.items;
      this.preferenceCategory = preference.data.getDiningPreference.category;
    },
    computed: {
      id(){
        return this.$route.params.id;
      }
    }
  }
};
</script>

<style></style>
