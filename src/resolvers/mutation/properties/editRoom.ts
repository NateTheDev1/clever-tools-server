import { Property } from '../../../db/models/Property';
import { Room } from '../../../db/models/Room';
import { UpdateLog } from '../../../db/models/UpdateLog';

export const editRoom: Resolvers.MutationResolvers['editRoom'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: editRoom');

	const edited = await Room.query().patchAndFetchById(args.id, {
		...args.input
	});

	await UpdateLog.query().insertAndFetch({
		roomId: edited.id,
		room: JSON.stringify(edited),
		timestamp: new Date().toString()
	});

	return true;
};
