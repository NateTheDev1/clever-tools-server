import User from '../../../db/models/User';
import { AuthenticationService } from '../../../services/AuthenticationService';

export const deleteUser: Resolvers.MutationResolvers['deleteUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: deleteUser');

	await User.query().deleteById(args.id);

	return true;
};
