import { API, graphqlOperation } from "aws-amplify";
import { createDiningPreference as createDiningPreferenceMutation } from "@/graphql/mutations";
import { getDiningPreference as getDiningPreferenceQuery } from "@/graphql/queries";
import { listDiningPreferences as listDiningPreferencesQuery } from "@/graphql/queries";
//import { createDiningPhoto as createDiningPhotoMutation } from "@/graphql/mutations";
// import { uuid } from "uuidv4";
// import awsconfig from "@/aws-exports";

const getDefaultState = () => {
  return {
    items: [],
    status: "empty",
  };
};

export const diningPreferenceInfo = {
  namespaced: true,
  state: { diningpreferences: null},
  mutations: {
    setDiningPreferences(state, payload) {
      state.diningpreferences = payload;
    },
    resetState(diningpreferences) {
      Object.assign(diningpreferences, getDefaultState());
    },
  },
  actions: {
    async clearDiningPreferences({ commit }) {
      commit("resetState");
    },
    async createDiningPreference({ dispatch }, newPreference) {
      try {
        await API.graphql(
          graphqlOperation(createDiningPreferenceMutation, {
            input: newPreference,
          })
        );

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
    async getDiningPreferencesData({ commit }) {
      const preferencesData = await API.graphql(
        graphqlOperation(listDiningPreferencesQuery)
      );
      commit(
        "setDiningPreferences",
        preferencesData.data.listDiningPreferences.items
      );
    },
    // async createDiningPhoto(_, data) {
    //     const {
    //         aws_user_files_s3_bucket_region: region,
    //         aws_user_files_s3_bucket: bucket
    //     } = awsconfig;
    //     const { file, type: mimeType, id } = data;
    //     const extension = file.name.substr(file.name.lastIndexOf(".") + 1);
    //     const photoId = uuid();
    //     const key = `images/${photoId}.${extension}`;
    //     const inputData = {
    //         id: photoId,
    //         photopreferenceId: id,
    //         contentType: mimeType,
    //         fullsize: {
    //             key,
    //             region,
    //             bucket
    //         }
    //     }

    //     //s3 bucket storage add file to it
    //     try {
    //         await Storage.put(key, file, {
    //             level: "protected",
    //             contentType: mimeType,
    //             metadata: { preferenceId: id, photoId }
    //         })
    //         await API.graphql(
    //             graphqlOperation(createDiningPhotoMutation, { input: inputData })
    //         )
    //         return Promise.resolve("success");

    //     } catch (error) {
    //         console.log("createDiningPhoto error", error)
    //         return Promise.reject(error);

    //     }
    // }
  },
  getters: {
    diningpreferences: (state) => state.diningpreferences
  },
};
