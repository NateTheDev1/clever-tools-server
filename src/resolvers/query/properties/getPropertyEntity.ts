import { Property } from '../../../db/models/Property';
import { Room } from '../../../db/models/Room';

//@ts-ignore
export const getPropertyEntity: Resolvers.QueryResolvers['getPropertyEntity'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getPropertyEntity');

		const property = await Property.query()
			.where({ id: args.propertyId, year: args.year })
			.first();

		const rooms = await Room.query().where({
			propertyId: args.propertyId,
			year: args.year
		});

		return {
			property: {
				...property,
				totalRooms: rooms.length,
				availableRooms: 0
			},
			rooms
		};
	};
