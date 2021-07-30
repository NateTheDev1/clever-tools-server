import { Room } from '../../../db/models/Room';
import { UpdateLog } from '../../../db/models/UpdateLog';

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

export const RoomResolvers: Resolvers.RoomResolvers = {
	updates: async (parent, args, context) => {
		return await UpdateLog.query().where({ roomId: parent.id });
	}
};
