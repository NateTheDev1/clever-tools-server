import { Property } from '../../../db/models/Property';
import { Room } from '../../../db/models/Room';
import { UpdateLog } from '../../../db/models/UpdateLog';

export const deleteProperty: Resolvers.MutationResolvers['deleteProperty'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: deleteProperty');

		await Property.query().deleteById(args.id);

		await Room.query().delete().where({ propertyId: args.id });

		return true;
	};
