import User from '../../../db/models/User';
import { AuthenticationService } from '../../../services/AuthenticationService';

export const createUser: Resolvers.MutationResolvers['createUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: createUser');

	const existing = await User.query()
		.where({ username: args.user.username })
		.first();

	if (existing) {
		throw new Error('A user already exists with this username.');
	}

	const created = await User.query().insertAndFetch({
		...args.user,
		password: await new AuthenticationService(
			args.user.password
		).hashPassword(),
		createdAt: new Date().toString()
	});

	return created;
};
