/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlayerProfile = /* GraphQL */ `subscription OnCreatePlayerProfile(
  $filter: ModelSubscriptionPlayerProfileFilterInput
) {
  onCreatePlayerProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlayerProfileSubscriptionVariables,
  APITypes.OnCreatePlayerProfileSubscription
>;
export const onUpdatePlayerProfile = /* GraphQL */ `subscription OnUpdatePlayerProfile(
  $filter: ModelSubscriptionPlayerProfileFilterInput
) {
  onUpdatePlayerProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerProfileSubscriptionVariables,
  APITypes.OnUpdatePlayerProfileSubscription
>;
export const onDeletePlayerProfile = /* GraphQL */ `subscription OnDeletePlayerProfile(
  $filter: ModelSubscriptionPlayerProfileFilterInput
) {
  onDeletePlayerProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerProfileSubscriptionVariables,
  APITypes.OnDeletePlayerProfileSubscription
>;
