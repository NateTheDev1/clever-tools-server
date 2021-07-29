import { Property } from '../../../db/models/Property';

export const deleteProperty: Resolvers.MutationResolvers['deleteProperty'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: deleteProperty');

		await Property.query().deleteById(args.id);

		return true;
	};
