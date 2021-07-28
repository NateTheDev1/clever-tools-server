import { AuthenticationError } from 'apollo-server-express';
import User from '../../../db/models/User';
import {
	AuthenticationService,
	signJWT
} from '../../../services/AuthenticationService';

export const login: Resolvers.MutationResolvers['login'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: login');

	if (context.authenticated) {
		throw new AuthenticationError('Already logged in');
	}

	const userToLogin = await User.query()
		.where({ username: args.credentials.username })
		.first();

	if (!userToLogin) {
		context.logger.err('Invalid Credentials in Login Mutation');
		throw new AuthenticationError(
			'Unable to login user. Invalid Credentials'
		);
	}

	const verified = await new AuthenticationService(
		userToLogin.password
	).verifyPassword(args.credentials.password);

	if (!verified) {
		throw new AuthenticationError(
			'Unable to login user. Invalid Credentials'
		);
	}

	context.session = {
		userId: userToLogin.id,
		username: userToLogin.username
	};

	const token = await signJWT(context);

	if (!token) {
		throw new AuthenticationError('Could not create token!');
	}

	context.response.setHeader('Authorization', token);

	return token;
};
