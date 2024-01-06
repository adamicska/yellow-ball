/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerProfileInput = {
  id?: string | null,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  pic?: string | null,
  raquet?: RaquetInput | null,
  strings?: StringsInput | null,
  level?: number | null,
  active?: boolean | null,
  following?: Array< string | null > | null,
  followers?: Array< string | null > | null,
  visiting?: string | null,
  Bio?: string | null,
  sub?: string | null,
};

export type RaquetInput = {
  brand?: string | null,
  label?: string | null,
  value?: string | null,
};

export type StringsInput = {
  brand?: string | null,
  label?: string | null,
  value?: string | null,
};

export type ModelPlayerProfileConditionInput = {
  country?: ModelStringInput | null,
  province?: ModelStringInput | null,
  city?: ModelStringInput | null,
  pic?: ModelStringInput | null,
  level?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  following?: ModelStringInput | null,
  followers?: ModelStringInput | null,
  visiting?: ModelStringInput | null,
  Bio?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelPlayerProfileConditionInput | null > | null,
  or?: Array< ModelPlayerProfileConditionInput | null > | null,
  not?: ModelPlayerProfileConditionInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type PlayerProfile = {
  __typename: "PlayerProfile",
  id: string,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  pic?: string | null,
  raquet?: Raquet | null,
  strings?: Strings | null,
  level?: number | null,
  active?: boolean | null,
  following?: Array< string | null > | null,
  followers?: Array< string | null > | null,
  visiting?: string | null,
  Bio?: string | null,
  sub?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Raquet = {
  __typename: "Raquet",
  brand?: string | null,
  label?: string | null,
  value?: string | null,
};

export type Strings = {
  __typename: "Strings",
  brand?: string | null,
  label?: string | null,
  value?: string | null,
};

export type UpdatePlayerProfileInput = {
  id: string,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  pic?: string | null,
  raquet?: RaquetInput | null,
  strings?: StringsInput | null,
  level?: number | null,
  active?: boolean | null,
  following?: Array< string | null > | null,
  followers?: Array< string | null > | null,
  visiting?: string | null,
  Bio?: string | null,
  sub?: string | null,
};

export type DeletePlayerProfileInput = {
  id: string,
};

export type ModelPlayerProfileFilterInput = {
  id?: ModelIDInput | null,
  country?: ModelStringInput | null,
  province?: ModelStringInput | null,
  city?: ModelStringInput | null,
  pic?: ModelStringInput | null,
  level?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  following?: ModelStringInput | null,
  followers?: ModelStringInput | null,
  visiting?: ModelStringInput | null,
  Bio?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelPlayerProfileFilterInput | null > | null,
  or?: Array< ModelPlayerProfileFilterInput | null > | null,
  not?: ModelPlayerProfileFilterInput | null,
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

export type ModelPlayerProfileConnection = {
  __typename: "ModelPlayerProfileConnection",
  items:  Array<PlayerProfile | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlayerProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  country?: ModelSubscriptionStringInput | null,
  province?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  pic?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionFloatInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  following?: ModelSubscriptionStringInput | null,
  followers?: ModelSubscriptionStringInput | null,
  visiting?: ModelSubscriptionStringInput | null,
  Bio?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreatePlayerProfileMutationVariables = {
  input: CreatePlayerProfileInput,
  condition?: ModelPlayerProfileConditionInput | null,
};

export type CreatePlayerProfileMutation = {
  createPlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerProfileMutationVariables = {
  input: UpdatePlayerProfileInput,
  condition?: ModelPlayerProfileConditionInput | null,
};

export type UpdatePlayerProfileMutation = {
  updatePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerProfileMutationVariables = {
  input: DeletePlayerProfileInput,
  condition?: ModelPlayerProfileConditionInput | null,
};

export type DeletePlayerProfileMutation = {
  deletePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlayerProfileQueryVariables = {
  id: string,
};

export type GetPlayerProfileQuery = {
  getPlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerProfilesQueryVariables = {
  filter?: ModelPlayerProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerProfilesQuery = {
  listPlayerProfiles?:  {
    __typename: "ModelPlayerProfileConnection",
    items:  Array< {
      __typename: "PlayerProfile",
      id: string,
      country?: string | null,
      province?: string | null,
      city?: string | null,
      pic?: string | null,
      level?: number | null,
      active?: boolean | null,
      following?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      visiting?: string | null,
      Bio?: string | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerProfileSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerProfileFilterInput | null,
};

export type OnCreatePlayerProfileSubscription = {
  onCreatePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerProfileSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerProfileFilterInput | null,
};

export type OnUpdatePlayerProfileSubscription = {
  onUpdatePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerProfileSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerProfileFilterInput | null,
};

export type OnDeletePlayerProfileSubscription = {
  onDeletePlayerProfile?:  {
    __typename: "PlayerProfile",
    id: string,
    country?: string | null,
    province?: string | null,
    city?: string | null,
    pic?: string | null,
    raquet?:  {
      __typename: "Raquet",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    strings?:  {
      __typename: "Strings",
      brand?: string | null,
      label?: string | null,
      value?: string | null,
    } | null,
    level?: number | null,
    active?: boolean | null,
    following?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    visiting?: string | null,
    Bio?: string | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
