import BaseModel from './BaseModel';

export class Room extends BaseModel {
	id!: number;
	propertyId!: number;
	name!: string;
	available!: boolean;
	year!: string;

	static get tableName() {
		return 'rooms';
	}
}
