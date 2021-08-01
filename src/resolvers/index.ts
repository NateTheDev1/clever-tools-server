import { addProperty } from './mutation/properties/addProperty';
import { addRoom } from './mutation/properties/addRoom';
import { deleteProperty } from './mutation/properties/deleteProperty';
import { deleteRoom } from './mutation/properties/deleteRoom';
import { editProperty } from './mutation/properties/editProperty';
import { editRoom } from './mutation/properties/editRoom';
import { createUser } from './mutation/user/createUser';
import { login } from './mutation/user/login';
import { getProperties } from './query/properties/getProperties';
import { getPropertyEntity } from './query/properties/getPropertyEntity';
import { getStatistics } from './query/properties/getStatistics';
import { PropertyResolvers, RoomResolvers } from './query/properties/property';
import { getUser } from './query/user/getUser';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		getUser,
		getProperties,
		getStatistics,
		getPropertyEntity
	},
	Property: PropertyResolvers,
	Room: RoomResolvers,
	Mutation: {
		createUser,
		login,
		addProperty,
		addRoom,
		deleteProperty,
		deleteRoom,
		editRoom,
		editProperty
	}
};
