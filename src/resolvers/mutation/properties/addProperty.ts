import { Property } from '../../../db/models/Property';

export const addProperty: Resolvers.MutationResolvers['addProperty'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: addProperty');

	const created = await Property.query().insertAndFetch({ ...args.input });

	return { ...created, totalRooms: 0, availableRooms: 0 };
};
