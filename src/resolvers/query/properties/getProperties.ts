import { Property } from '../../../db/models/Property';
import User from '../../../db/models/User';

//@ts-ignore
export const getProperties: Resolvers.QueryResolvers['getProperties'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getProperties');

	const properties = await Property.query()
		.where({ year: args.year })
		.orderBy('name', 'ASC');

	return properties;
};
