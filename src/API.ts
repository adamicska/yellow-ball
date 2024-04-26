/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  userId: string,
  username?: string | null,
  ranking?: number | null,
  country: string,
  province?: string | null,
  city?: string | null,
  racquet?: string | null,
  strings?: string | null,
  level: number,
  active: boolean,
  Bio?: string | null,
};

export type ModelPlayerConditionInput = {
  username?: ModelStringInput | null,
  ranking?: ModelIntInput | null,
  country?: ModelStringInput | null,
  province?: ModelStringInput | null,
  city?: ModelStringInput | null,
  racquet?: ModelStringInput | null,
  strings?: ModelStringInput | null,
  level?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  Bio?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
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

export type ModelIntInput = {
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

export type Player = {
  __typename: "Player",
  userId: string,
  username?: string | null,
  ranking?: number | null,
  country: string,
  province?: string | null,
  city?: string | null,
  racquet?: string | null,
  strings?: string | null,
  level: number,
  active: boolean,
  Bio?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerInput = {
  userId: string,
  username?: string | null,
  ranking?: number | null,
  country?: string | null,
  province?: string | null,
  city?: string | null,
  racquet?: string | null,
  strings?: string | null,
  level?: number | null,
  active?: boolean | null,
  Bio?: string | null,
};

export type DeletePlayerInput = {
  userId: string,
};

export type CreateMessageInput = {
  id?: string | null,
  owner: string,
  message: string,
};

export type ModelMessageConditionInput = {
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  owner: string,
  message: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  owner?: string | null,
  message?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelPlayerFilterInput = {
  userId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  ranking?: ModelIntInput | null,
  country?: ModelStringInput | null,
  province?: ModelStringInput | null,
  city?: ModelStringInput | null,
  racquet?: ModelStringInput | null,
  strings?: ModelStringInput | null,
  level?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  Bio?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlayerFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  ranking?: ModelSubscriptionIntInput | null,
  country?: ModelSubscriptionStringInput | null,
  province?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  racquet?: ModelSubscriptionStringInput | null,
  strings?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionFloatInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  Bio?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  owner?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlayerQueryVariables = {
  userId: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  userId?: string | null,
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      userId: string,
      username?: string | null,
      ranking?: number | null,
      country: string,
      province?: string | null,
      city?: string | null,
      racquet?: string | null,
      strings?: string | null,
      level: number,
      active: boolean,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      owner: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    userId: string,
    username?: string | null,
    ranking?: number | null,
    country: string,
    province?: string | null,
    city?: string | null,
    racquet?: string | null,
    strings?: string | null,
    level: number,
    active: boolean,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
