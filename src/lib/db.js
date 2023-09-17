import { MongoClient, ServerApiVersion } from 'mongodb'; 
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('portfolio');
const collection = db.collection('visitors');

/**
 * @param {string} country - country name
 * @param {string} countryCode - two-letter country code
 */
async function addCountryandCodeToTheDatabase(country, countryCode) {
  try {
    await collection
      .findOneAndUpdate(
        { "country": country, "countryCode": countryCode },
        {
          $inc: { "visits": 1 }
        },
        { upsert: true, }
      );
  } catch(error) {
    console.log("Error adding country to the database:", error);
  }
}

async function getTotalVisits() {
  const aggregate = [
    {
      '$group': {
        '_id': 'country',
        'totalVisits': {
          '$sum': '$visits'
        }
      }
    }
  ];
  try {
    const cursor = collection.aggregate(aggregate);
    const result = await cursor.toArray();
    return await result[0].totalVisits;
  } catch(error) {
    console.log("Error getting total visits from the database:", error);
  }
}

async function getVisityByCountry() {
  const projection = { _id: 0 }
  try {
    return await collection
      .find(
        {},
        { projection: projection }
      )
      .toArray();
  } catch(error) {
    console.log("Error getting visits by country.")
  }
}

/**
 * @param {string} country - country name
 * @param {string} countryCode - two-letter country code
 */
export async function connectToDatabase( country, countryCode) {
  let totalVisits;
  let visitsByCountryWithCountryCode;
  try {
    await client.connect();
    console.log("Successfully connected to the database.")
    // Run the necessary functions.
    // TODO add the client's country and country code to the database
    await addCountryandCodeToTheDatabase(country, countryCode);
    // TODO get the total number of visits
    totalVisits = await getTotalVisits();
    visitsByCountryWithCountryCode = await getVisityByCountry();
  } catch(error) {
    console.log("Database connection error", error);
  } finally {
    await client.close();
    console.log("Closed database connection.")
  }
  return {
    totalVisits,
    visitsByCountryWithCountryCode
  }
}
