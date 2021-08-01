import { Property } from '../../../db/models/Property';
import { Room } from '../../../db/models/Room';
import { UpdateLog } from '../../../db/models/UpdateLog';

export const editProperty: Resolvers.MutationResolvers['editProperty'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: editProperty');

	await Property.query().patchAndFetchById(args.id, {
		...args.input
	});

	return true;
};
