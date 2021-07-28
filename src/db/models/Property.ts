import BaseModel from './BaseModel';

export class Property extends BaseModel {
	id!: number;
	name!: string;
	address!: string;
	year!: string;

	static get tableName() {
		return 'properties';
	}
}
