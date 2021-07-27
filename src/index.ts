import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import e from 'express';

// Other
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { createServer } from 'http';
import { initializeMiddleware } from './services/MiddlewareService';
import { typeDefs } from './schema';
import { createContext } from './services/ContextService';
import { resolvers } from './resolvers';

dotenv.config();

const PORT = process.env.PORT;

logger.info('Starting up...');

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers,
	context: async ({ req, res }: { req: e.Request; res: e.Response }) => {
		logger.info('Running Context');

		return await createContext(req, res);
	}
});

const app = express();

initializeMiddleware(app);

server.applyMiddleware({ app: app as any });

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
	console.info(
		`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
	);
});
