import { MongoClient, ServerApiVersion } from 'mongodb';
import { DB_URI } from '$env/static/private';

export interface CountryData {
	visits: number;
	country: string;
	countryCode: string | null;
}

const client = new MongoClient(DB_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

const clientPromise = client.connect();

const db = client.db('portfolio');
const collection = db.collection<CountryData>('visitors');

export async function addCountryandCodeToTheDatabase(
	country: string,
	countryCode: string | null
): Promise<void> {
	await clientPromise;
	await collection.findOneAndUpdate(
		{ country, countryCode },
		{ $inc: { visits: 1 } },
		{ upsert: true }
	);
}

export async function getTotalVisits(): Promise<number> {
	await clientPromise;
	const aggregate = [{ $group: { _id: 'country', totalVisits: { $sum: '$visits' } } }];
	const cursor = collection.aggregate<{ totalVisits: number }>(aggregate);
	const result = await cursor.toArray();
	return result[0]?.totalVisits ?? 0;
}

export async function getVisitsByCountry(): Promise<CountryData[]> {
	await clientPromise;
	return await collection.find({}, { projection: { _id: 0 } }).toArray();
}
