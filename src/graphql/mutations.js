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
      rating
      cost
      location
      distance
      service
      hours
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
      rating
      cost
      location
      distance
      service
      hours
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
      rating
      cost
      location
      distance
      service
      hours
      createdAt
      updatedAt
    }
  }
`;
