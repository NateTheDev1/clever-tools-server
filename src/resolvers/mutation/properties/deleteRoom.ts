import { Room } from '../../../db/models/Room';

export const deleteRoom: Resolvers.MutationResolvers['deleteRoom'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: deleteRoom');

	await Room.query().deleteById(args.id);

	return true;
};
