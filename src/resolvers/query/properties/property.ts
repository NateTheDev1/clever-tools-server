import { Room } from '../../../db/models/Room';

export const PropertyResolvers: Resolvers.PropertyResolvers = {
	totalRooms: async (parent, args, context) => {
		return (
			await Room.query().where({
				propertyId: parent.id,
				year: parent.year
			})
		).length;
	},
	availableRooms: async (parent, args, context) => {
		return (
			await Room.query().where({
				propertyId: parent.id,
				year: parent.year,
				available: true
			})
		).length;
	}
};
