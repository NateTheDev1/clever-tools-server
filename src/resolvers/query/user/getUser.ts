import User from '../../../db/models/User';

export const getUser: Resolvers.QueryResolvers['getUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getUser');

	const user = await User.query().where({ id: args.id }).first();

	return user;
};
