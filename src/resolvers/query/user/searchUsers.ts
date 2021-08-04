import User from '../../../db/models/User';

export const searchUsers: Resolvers.QueryResolvers['searchUsers'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: searchUsers');

	const users = await User.query();

	return users.filter(
		user =>
			user.username.toLowerCase().search(args.query.toLowerCase()) !== -1
	);
};
