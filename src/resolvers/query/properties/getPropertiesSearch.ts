import { fn, raw } from 'objection';
import { Property } from '../../../db/models/Property';
import User from '../../../db/models/User';

//@ts-ignore
export const getPropertiesSearch: Resolvers.QueryResolvers['getPropertiesSearch'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getPropertiesSearch');

		const properties = await Property.query()
			.where({ year: args.year })
			.where(raw(`UPPER(name) LIKE UPPER('%${args.query}%')`))
			.orderBy('name', 'ASC');

		return properties;
	};
