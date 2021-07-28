import { createUser } from './mutation/user/createUser';
import { login } from './mutation/user/login';
import { getProperties } from './query/properties/getProperties';
import { PropertyResolvers } from './query/properties/property';
import { getUser } from './query/user/getUser';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		getUser,
		getProperties
	},
	Property: PropertyResolvers,
	Mutation: {
		createUser,
		login
	}
};
