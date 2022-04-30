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
      recommendation {
        businesses {
          id
          alias
          name
          image_url
          is_closed
          url
          review_count
          rating
          transactions
          price
          phone
          display_phone
          distance
        }
        total
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
        recommendation {
          total
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
