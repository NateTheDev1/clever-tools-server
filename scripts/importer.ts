import { Property } from '../src/db/models/Property';
import { Room } from '../src/db/models/Room';
import jsonData from './properties.json';

type PropertyJSONType = {
	address: string;
	house: string;
	postalCode: string;
};

const importer = async () => {
	await deleteAllProperties();
	await deleteAllRooms();

	const json: PropertyJSONType[] = JSON.parse(
		JSON.stringify(jsonData as any)
	);

	for (let i = 0; i < json.length; i++) {
		console.log(`${i}/${json.length}`);
		await Property.query().insert({
			address: json[i].address + ' - ' + json[i].house,
			name: '',
			year: '2020'
		});
		await Property.query().insert({
			address: json[i].address + ' - ' + json[i].house,
			name: '',
			year: '2021'
		});
		await Property.query().insert({
			address: json[i].address + ' - ' + json[i].house,
			name: '',
			year: '2022'
		});
	}
};

const deleteAllProperties = async () => {
	await Property.query().delete();
};

const deleteAllRooms = async () => {
	await Room.query().delete();
};

importer();
