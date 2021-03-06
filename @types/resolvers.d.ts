import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
declare global { namespace Resolvers {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddPropertyInput: AddPropertyInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  AddRoomInput: AddRoomInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUserInput: CreateUserInput;
  EditPropertyInput: EditPropertyInput;
  EditRoomInput: EditRoomInput;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Property: ResolverTypeWrapper<Property>;
  PropertyEntity: ResolverTypeWrapper<PropertyEntity>;
  Query: ResolverTypeWrapper<{}>;
  Room: ResolverTypeWrapper<Room>;
  Statistic: ResolverTypeWrapper<Statistic>;
  UpdateLog: ResolverTypeWrapper<UpdateLog>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddPropertyInput: AddPropertyInput;
  String: Scalars['String'];
  AddRoomInput: AddRoomInput;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  CreateUserInput: CreateUserInput;
  EditPropertyInput: EditPropertyInput;
  EditRoomInput: EditRoomInput;
  LoginInput: LoginInput;
  Mutation: {};
  Property: Property;
  PropertyEntity: PropertyEntity;
  Query: {};
  Room: Room;
  Statistic: Statistic;
  UpdateLog: UpdateLog;
  User: User;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addProperty?: Resolver<ResolversTypes['Property'], ParentType, ContextType, RequireFields<MutationAddPropertyArgs, 'input'>>;
  deleteProperty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePropertyArgs, 'id'>>;
  editProperty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationEditPropertyArgs, 'id' | 'input'>>;
  addRoom?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationAddRoomArgs, 'input'>>;
  deleteRoom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteRoomArgs, 'id'>>;
  editRoom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationEditRoomArgs, 'id'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user'>>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'credentials'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
};

export type PropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Property'] = ResolversParentTypes['Property']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalRooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  availableRooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyEntity'] = ResolversParentTypes['PropertyEntity']> = {
  property?: Resolver<ResolversTypes['Property'], ParentType, ContextType>;
  rooms?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getProperties?: Resolver<Array<Maybe<ResolversTypes['Property']>>, ParentType, ContextType, RequireFields<QueryGetPropertiesArgs, 'year'>>;
  getPropertiesSearch?: Resolver<Array<Maybe<ResolversTypes['Property']>>, ParentType, ContextType, RequireFields<QueryGetPropertiesSearchArgs, 'year' | 'query'>>;
  getStatistics?: Resolver<ResolversTypes['Statistic'], ParentType, ContextType>;
  getPropertyEntity?: Resolver<ResolversTypes['PropertyEntity'], ParentType, ContextType, RequireFields<QueryGetPropertyEntityArgs, 'propertyId' | 'year'>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  searchUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>;
};

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updates?: Resolver<Array<Maybe<ResolversTypes['UpdateLog']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['Statistic'] = ResolversParentTypes['Statistic']> = {
  totalProperties?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalOpenRooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnavailableRooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalRooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateLog'] = ResolversParentTypes['UpdateLog']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Property?: PropertyResolvers<ContextType>;
  PropertyEntity?: PropertyEntityResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  Statistic?: StatisticResolvers<ContextType>;
  UpdateLog?: UpdateLogResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

} } export {};