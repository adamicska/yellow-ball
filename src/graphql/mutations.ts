/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPlayerProfile = /* GraphQL */ `mutation CreatePlayerProfile(
  $input: CreatePlayerProfileInput!
  $condition: ModelPlayerProfileConditionInput
) {
  createPlayerProfile(input: $input, condition: $condition) {
    id
    country
    province
    city
    pic
    raquet {
      brand
      label
      value
      __typename
    }
    strings {
      brand
      label
      value
      __typename
    }
    level
    active
    following
    followers
    visiting
    Bio
    sub
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlayerProfileMutationVariables,
  APITypes.CreatePlayerProfileMutation
>;
export const updatePlayerProfile = /* GraphQL */ `mutation UpdatePlayerProfile(
  $input: UpdatePlayerProfileInput!
  $condition: ModelPlayerProfileConditionInput
) {
  updatePlayerProfile(input: $input, condition: $condition) {
    id
    country
    province
    city
    pic
    raquet {
      brand
      label
      value
      __typename
    }
    strings {
      brand
      label
      value
      __typename
    }
    level
    active
    following
    followers
    visiting
    Bio
    sub
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlayerProfileMutationVariables,
  APITypes.UpdatePlayerProfileMutation
>;
export const deletePlayerProfile = /* GraphQL */ `mutation DeletePlayerProfile(
  $input: DeletePlayerProfileInput!
  $condition: ModelPlayerProfileConditionInput
) {
  deletePlayerProfile(input: $input, condition: $condition) {
    id
    country
    province
    city
    pic
    raquet {
      brand
      label
      value
      __typename
    }
    strings {
      brand
      label
      value
      __typename
    }
    level
    active
    following
    followers
    visiting
    Bio
    sub
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlayerProfileMutationVariables,
  APITypes.DeletePlayerProfileMutation
>;
