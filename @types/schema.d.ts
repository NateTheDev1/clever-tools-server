declare global { namespace Schema {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

interface AddPropertyInput {
  name: Scalars['String'];
  address: Scalars['String'];
  year: Scalars['String'];
}

interface AddRoomInput {
  propertyId: Scalars['Int'];
  name: Scalars['String'];
  available: Scalars['Boolean'];
  year: Scalars['String'];
}

interface CreateUserInput {
  admin: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
  createdBy?: Maybe<Scalars['String']>;
}

interface LoginInput {
  username: Scalars['String'];
  password: Scalars['String'];
}

interface Mutation {
  __typename?: 'Mutation';
  addProperty: Property;
  addRoom: Room;
  createUser: User;
  login: Scalars['String'];
}


interface MutationAddPropertyArgs {
  input: AddPropertyInput;
}


interface MutationAddRoomArgs {
  input: AddRoomInput;
}


interface MutationCreateUserArgs {
  user: CreateUserInput;
}


interface MutationLoginArgs {
  credentials: LoginInput;
}

interface Property {
  __typename?: 'Property';
  id: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  totalRooms: Scalars['Int'];
  availableRooms: Scalars['Int'];
  year: Scalars['String'];
}

interface Query {
  __typename?: 'Query';
  getProperties: Array<Maybe<Property>>;
  getStatistics: Statistic;
  getUser: User;
}


interface QueryGetPropertiesArgs {
  year: Scalars['String'];
}


interface QueryGetUserArgs {
  id: Scalars['Int'];
}

interface Room {
  __typename?: 'Room';
  id: Scalars['Int'];
  propertyId: Scalars['Int'];
  name: Scalars['String'];
  available: Scalars['Boolean'];
  year: Scalars['String'];
  updates: Array<Maybe<UpdateLog>>;
}

interface Statistic {
  __typename?: 'Statistic';
  totalProperties: Scalars['Int'];
  totalOpenRooms: Scalars['Int'];
  totalUnavailableRooms: Scalars['Int'];
  totalRooms: Scalars['Int'];
}

interface UpdateLog {
  __typename?: 'UpdateLog';
  id: Scalars['Int'];
  roomId: Scalars['Int'];
  timestamp: Scalars['String'];
  room: Scalars['String'];
}

interface User {
  __typename?: 'User';
  id: Scalars['Int'];
  admin: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  createdAt: Scalars['String'];
  createdBy?: Maybe<Scalars['String']>;
}

} } export {};