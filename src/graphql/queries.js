/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDiningPreference = /* GraphQL */ `
  query GetDiningPreference($id: ID!) {
    getDiningPreference(id: $id) {
      id
      category
      price
      location
      distance
      hours
      limit
      recommendations {
        total
        business {
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
        price
        location
        distance
        hours
        limit
        recommendations {
          total
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDiningRecommendation = /* GraphQL */ `
  query GetDiningRecommendation($id: ID!) {
    getDiningRecommendation(id: $id) {
      total
      business {
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
export const listDiningRecommendations = /* GraphQL */ `
  query ListDiningRecommendations(
    $filter: ModelDiningRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiningRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        total
        business {
          name
          rating
          price
          distance
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
