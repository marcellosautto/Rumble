/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecommendation = /* GraphQL */ `
  mutation CreateRecommendation(
    $input: CreateRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    createRecommendation(input: $input, condition: $condition) {
      id
      name
      rating
      origins
      cost
      location
      service
      createdAt
      updatedAt
    }
  }
`;
export const updateRecommendation = /* GraphQL */ `
  mutation UpdateRecommendation(
    $input: UpdateRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    updateRecommendation(input: $input, condition: $condition) {
      id
      name
      rating
      origins
      cost
      location
      service
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecommendation = /* GraphQL */ `
  mutation DeleteRecommendation(
    $input: DeleteRecommendationInput!
    $condition: ModelRecommendationConditionInput
  ) {
    deleteRecommendation(input: $input, condition: $condition) {
      id
      name
      rating
      origins
      cost
      location
      service
      createdAt
      updatedAt
    }
  }
`;
