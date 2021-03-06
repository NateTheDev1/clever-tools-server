import { Property } from '../../../db/models/Property';
import { Room } from '../../../db/models/Room';
import User from '../../../db/models/User';

export const getStatistics: Resolvers.QueryResolvers['getStatistics'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getStatistics');

	const totalProperties = await (await Property.query()).length;

	const totalOpenRooms = await (
		await Room.query().where({ available: true })
	).length;

	const totalUnavailableRooms = await (
		await Room.query().where({ available: false })
	).length;

	const totalRooms = await (await Room.query()).length;

	return {
		totalProperties,
		totalOpenRooms,
		totalRooms,
		totalUnavailableRooms
	};
};
