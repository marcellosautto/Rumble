/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecommendationInput = {
  id?: string | null,
  name: string,
  rating?: string | null,
  origins?: string | null,
  cost?: string | null,
  location?: string | null,
  service?: string | null,
};

export type ModelRecommendationConditionInput = {
  name?: ModelStringInput | null,
  rating?: ModelStringInput | null,
  origins?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  location?: ModelStringInput | null,
  service?: ModelStringInput | null,
  and?: Array< ModelRecommendationConditionInput | null > | null,
  or?: Array< ModelRecommendationConditionInput | null > | null,
  not?: ModelRecommendationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Recommendation = {
  __typename: "Recommendation",
  id: string,
  name: string,
  rating?: string | null,
  origins?: string | null,
  cost?: string | null,
  location?: string | null,
  service?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRecommendationInput = {
  id: string,
  name?: string | null,
  rating?: string | null,
  origins?: string | null,
  cost?: string | null,
  location?: string | null,
  service?: string | null,
};

export type DeleteRecommendationInput = {
  id: string,
};

export type ModelRecommendationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  rating?: ModelStringInput | null,
  origins?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  location?: ModelStringInput | null,
  service?: ModelStringInput | null,
  and?: Array< ModelRecommendationFilterInput | null > | null,
  or?: Array< ModelRecommendationFilterInput | null > | null,
  not?: ModelRecommendationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRecommendationConnection = {
  __typename: "ModelRecommendationConnection",
  items:  Array<Recommendation | null >,
  nextToken?: string | null,
};

export type CreateRecommendationMutationVariables = {
  input: CreateRecommendationInput,
  condition?: ModelRecommendationConditionInput | null,
};

export type CreateRecommendationMutation = {
  createRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecommendationMutationVariables = {
  input: UpdateRecommendationInput,
  condition?: ModelRecommendationConditionInput | null,
};

export type UpdateRecommendationMutation = {
  updateRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecommendationMutationVariables = {
  input: DeleteRecommendationInput,
  condition?: ModelRecommendationConditionInput | null,
};

export type DeleteRecommendationMutation = {
  deleteRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRecommendationQueryVariables = {
  id: string,
};

export type GetRecommendationQuery = {
  getRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecommendationsQueryVariables = {
  filter?: ModelRecommendationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecommendationsQuery = {
  listRecommendations?:  {
    __typename: "ModelRecommendationConnection",
    items:  Array< {
      __typename: "Recommendation",
      id: string,
      name: string,
      rating?: string | null,
      origins?: string | null,
      cost?: string | null,
      location?: string | null,
      service?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecommendationSubscription = {
  onCreateRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecommendationSubscription = {
  onUpdateRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecommendationSubscription = {
  onDeleteRecommendation?:  {
    __typename: "Recommendation",
    id: string,
    name: string,
    rating?: string | null,
    origins?: string | null,
    cost?: string | null,
    location?: string | null,
    service?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
