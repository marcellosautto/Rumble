/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDiningPreference = /* GraphQL */ `
  query GetDiningPreference($id: ID!) {
    getDiningPreference(id: $id) {
      id
      category
      rating
      cost
      location
      distance
      hours
      createdAt
      updatedAt
    }
  }
`;
export const listDiningPreferences = /* GraphQL */ `
  query ListDiningPreferences(
    $filter: ModelDiningPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiningPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        rating
        cost
        location
        distance
        hours
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
