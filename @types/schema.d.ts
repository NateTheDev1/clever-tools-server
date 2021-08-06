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

interface EditPropertyInput {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
}

interface EditRoomInput {
  name?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
}

interface LoginInput {
  username: Scalars['String'];
  password: Scalars['String'];
}

interface Mutation {
  __typename?: 'Mutation';
  addProperty: Property;
  deleteProperty: Scalars['Boolean'];
  editProperty: Scalars['Boolean'];
  addRoom: Room;
  deleteRoom: Scalars['Boolean'];
  editRoom: Scalars['Boolean'];
  createUser: User;
  login: Scalars['String'];
  deleteUser: Scalars['Boolean'];
}


interface MutationAddPropertyArgs {
  input: AddPropertyInput;
}


interface MutationDeletePropertyArgs {
  id: Scalars['Int'];
}


interface MutationEditPropertyArgs {
  id: Scalars['Int'];
  input: EditPropertyInput;
}


interface MutationAddRoomArgs {
  input: AddRoomInput;
}


interface MutationDeleteRoomArgs {
  id: Scalars['Int'];
}


interface MutationEditRoomArgs {
  id: Scalars['Int'];
  input?: Maybe<EditRoomInput>;
}


interface MutationCreateUserArgs {
  user: CreateUserInput;
}


interface MutationLoginArgs {
  credentials: LoginInput;
}


interface MutationDeleteUserArgs {
  id: Scalars['Int'];
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

interface PropertyEntity {
  __typename?: 'PropertyEntity';
  property: Property;
  rooms: Array<Maybe<Room>>;
}

interface Query {
  __typename?: 'Query';
  getProperties: Array<Maybe<Property>>;
  getPropertiesSearch: Array<Maybe<Property>>;
  getStatistics: Statistic;
  getPropertyEntity: PropertyEntity;
  getUser: User;
  searchUsers: Array<Maybe<User>>;
}


interface QueryGetPropertiesArgs {
  year: Scalars['String'];
}


interface QueryGetPropertiesSearchArgs {
  year: Scalars['String'];
  query: Scalars['String'];
}


interface QueryGetPropertyEntityArgs {
  propertyId: Scalars['Int'];
  year: Scalars['Int'];
}


interface QueryGetUserArgs {
  id: Scalars['Int'];
}


interface QuerySearchUsersArgs {
  query: Scalars['String'];
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