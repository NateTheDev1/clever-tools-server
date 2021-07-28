import { addProperty } from './mutation/properties/addProperty';
import { addRoom } from './mutation/properties/addRoom';
import { createUser } from './mutation/user/createUser';
import { login } from './mutation/user/login';
import { getProperties } from './query/properties/getProperties';
import { getStatistics } from './query/properties/getStatistics';
import { PropertyResolvers } from './query/properties/property';
import { getUser } from './query/user/getUser';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		getUser,
		getProperties,
		getStatistics
	},
	Property: PropertyResolvers,
	Mutation: {
		createUser,
		login,
		addProperty,
		addRoom
	}
};
