/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDiningPreference = /* GraphQL */ `
  mutation CreateDiningPreference(
    $input: CreateDiningPreferenceInput!
    $condition: ModelDiningPreferenceConditionInput
  ) {
    createDiningPreference(input: $input, condition: $condition) {
      id
      category
      price
      location
      distance
      hours
      limit
      recommendations {
        businesses {
          name
          rating
          price
          distance
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDiningPreference = /* GraphQL */ `
  mutation UpdateDiningPreference(
    $input: UpdateDiningPreferenceInput!
    $condition: ModelDiningPreferenceConditionInput
  ) {
    updateDiningPreference(input: $input, condition: $condition) {
      id
      category
      price
      location
      distance
      hours
      limit
      recommendations {
        businesses {
          name
          rating
          price
          distance
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiningPreference = /* GraphQL */ `
  mutation DeleteDiningPreference(
    $input: DeleteDiningPreferenceInput!
    $condition: ModelDiningPreferenceConditionInput
  ) {
    deleteDiningPreference(input: $input, condition: $condition) {
      id
      category
      price
      location
      distance
      hours
      limit
      recommendations {
        businesses {
          name
          rating
          price
          distance
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDiningRecommendation = /* GraphQL */ `
  mutation CreateDiningRecommendation(
    $input: CreateDiningRecommendationInput!
    $condition: ModelDiningRecommendationConditionInput
  ) {
    createDiningRecommendation(input: $input, condition: $condition) {
      businesses {
        name
        rating
        price
        location {
          address
          city
          state
          country
        }
        distance
        hours {
          is_open_now
        }
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateDiningRecommendation = /* GraphQL */ `
  mutation UpdateDiningRecommendation(
    $input: UpdateDiningRecommendationInput!
    $condition: ModelDiningRecommendationConditionInput
  ) {
    updateDiningRecommendation(input: $input, condition: $condition) {
      businesses {
        name
        rating
        price
        location {
          address
          city
          state
          country
        }
        distance
        hours {
          is_open_now
        }
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiningRecommendation = /* GraphQL */ `
  mutation DeleteDiningRecommendation(
    $input: DeleteDiningRecommendationInput!
    $condition: ModelDiningRecommendationConditionInput
  ) {
    deleteDiningRecommendation(input: $input, condition: $condition) {
      businesses {
        name
        rating
        price
        location {
          address
          city
          state
          country
        }
        distance
        hours {
          is_open_now
        }
      }
      id
      createdAt
      updatedAt
    }
  }
`;
