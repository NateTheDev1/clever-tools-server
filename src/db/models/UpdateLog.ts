import BaseModel from './BaseModel';

export class UpdateLog extends BaseModel {
	id!: number;
	roomId!: number;
	timestamp!: string;
	room!: string;

	static get tableName() {
		return 'update_log';
	}
}
