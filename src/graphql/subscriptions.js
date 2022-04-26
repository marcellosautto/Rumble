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
export const onCreateDiningRecommendation = /* GraphQL */ `
  subscription OnCreateDiningRecommendation {
    onCreateDiningRecommendation {
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
export const onUpdateDiningRecommendation = /* GraphQL */ `
  subscription OnUpdateDiningRecommendation {
    onUpdateDiningRecommendation {
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
export const onDeleteDiningRecommendation = /* GraphQL */ `
  subscription OnDeleteDiningRecommendation {
    onDeleteDiningRecommendation {
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
