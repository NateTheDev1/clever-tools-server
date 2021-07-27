import BaseModel from './BaseModel';

class User extends BaseModel {
	id!: number;
	admin!: boolean;
	name?: string;
	username!: string;
	password!: string;
	createdAt!: string;
	createdBy?: string;

	static get tableName() {
		return 'users';
	}
}

export default User;
