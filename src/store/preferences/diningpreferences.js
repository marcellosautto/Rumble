import { API, graphqlOperation } from "aws-amplify";
import { createDiningPreference as createDiningPreferenceMutation } from "@/graphql/mutations";
import { updateDiningPreference as updateDiningPreferenceMutation } from "@/graphql/mutations";
import { getDiningPreference as getDiningPreferenceQuery } from "@/graphql/queries";
import { listDiningPreferences as listDiningPreferencesQuery } from "@/graphql/queries";
import { deleteDiningPreference as deleteDiningPreferenceMutation } from "@/graphql/mutations";
//import { createDiningRecommendation as createDiningRecommendationMutation} from "@/graphql/mutations";
// import { uuid } from "uuidv4";
// import awsconfig from "@/aws-exports";

// const getDefaultState = () => {
//   return {
//     items: [],
//     status: "empty",
//   };
// };

export const diningPreferenceInfo = {
  namespaced: true,
  state: { diningpreferences: null },
  mutations: {
    setDiningPreferences(state, payload) {
      state.diningpreferences = payload;
    },
    // resetState(state) {
    //   state.diningpreferences = getDefaultState();
    // },
    removePreference: (state, id) => state.diningpreferences = state.diningpreferences.filter((diningpreference) => diningpreference.id !== id)
  },
  actions: {
    // async clearDiningPreferences({ commit }) {
    //   await API.graphql(
    //     graphqlOperation(createDiningPreferenceMutation, {
    //       input: newPreference,
    //     })
    //   );
    //   commit("resetState");
    // },
    async createDiningPreference(
      { dispatch },
      newPreference,
    ) {
      try {
        await API.graphql(
          graphqlOperation(createDiningPreferenceMutation, {
            input: newPreference
          })
        );

        // await API.graphql(createDiningRecommendation, {
        //   input: recommendations
        // })

        dispatch("getDiningPreferencesData");
      } catch (error) {
        console.error("createDiningPreference", error);
      }
    },
    async getDiningPreference(_, preferenceId) {
      return await API.graphql(
        graphqlOperation(getDiningPreferenceQuery, { id: preferenceId })
      );
    },
    async deleteDiningPreference({ commit }, preferenceId) {
        await API.graphql(
          graphqlOperation(deleteDiningPreferenceMutation, {
            input: {id: preferenceId},
          })
        );

        commit("removePreference", preferenceId);
    },
    async updateDiningPreference(
      { dispatch },
      updatedPreference,
    ) {
      try {
        await API.graphql(
          graphqlOperation(updateDiningPreferenceMutation, {
            input: updatedPreference
          })
        );

        dispatch("getDiningPreferencesData");
      } catch (error) {
        console.error("updateDiningPreference", error);
      }
    },
    async getDiningPreferencesData({ commit }) {
      const preferencesData = await API.graphql(
        graphqlOperation(listDiningPreferencesQuery)
      );
      commit(
        "setDiningPreferences",
        preferencesData.data.listDiningPreferences.items
      );
    },
  },
  getters: {
    diningpreferences: (state) => state.diningpreferences,
  },
};
