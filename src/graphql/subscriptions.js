/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDiningPreference = /* GraphQL */ `
  subscription OnCreateDiningPreference {
    onCreateDiningPreference {
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
export const onUpdateDiningPreference = /* GraphQL */ `
  subscription OnUpdateDiningPreference {
    onUpdateDiningPreference {
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
export const onDeleteDiningPreference = /* GraphQL */ `
  subscription OnDeleteDiningPreference {
    onDeleteDiningPreference {
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
