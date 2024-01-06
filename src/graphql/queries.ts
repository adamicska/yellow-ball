/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPlayerProfile = /* GraphQL */ `query GetPlayerProfile($id: ID!) {
  getPlayerProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPlayerProfileQueryVariables,
  APITypes.GetPlayerProfileQuery
>;
export const listPlayerProfiles = /* GraphQL */ `query ListPlayerProfiles(
  $filter: ModelPlayerProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayerProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      country
      province
      city
      pic
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlayerProfilesQueryVariables,
  APITypes.ListPlayerProfilesQuery
>;
