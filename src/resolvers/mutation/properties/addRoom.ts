import { Property } from '../../../db/models/Property';
import { Room } from '../../../db/models/Room';
import { UpdateLog } from '../../../db/models/UpdateLog';

export const addRoom: Resolvers.MutationResolvers['addRoom'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: addRoom');

	const created = await Room.query().insertAndFetch({
		...args.input,
		available: true
	});

	await UpdateLog.query().insertAndFetch({
		roomId: created.id,
		room: JSON.stringify(created),
		timestamp: new Date().toString()
	});

	const updates = await UpdateLog.query().where({ roomId: created.id });

	return { ...created, updates };
};
