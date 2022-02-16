/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecommendation = /* GraphQL */ `
  query GetRecommendation($id: ID!) {
    getRecommendation(id: $id) {
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
export const listRecommendations = /* GraphQL */ `
  query ListRecommendations(
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
