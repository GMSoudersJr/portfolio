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
 * @param {string} clientAddress - client's ip address
 * @param {string} country - country name
 * @param {string} countryCode - two-letter country code
 */
async function addClientAddressAndCountryDataToCollection(clientAddress, country, countryCode) {
  try {
    await collection
      .findOneAndUpdate(
        { "clientAddress": clientAddress },
        {
          $set: { "country": country, "countryCode": countryCode },
          $inc: { "visits": 1 }
        },
        { upsert: true, }
      );
  } catch(error) {
    console.log("Error adding client address to the database:", error);
  }
}

async function getTotalVisits() {
  const aggregate = [
    {
      '$group': {
        '_id': 'clientAddress',
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

async function getNumberOfVisitors() {
  try {
    return await collection.estimatedDocumentCount();
  } catch(error) {
    console.log("Error getting the number of visitors:", error);
  }
}

async function getIpAddresses() {
  const projection = { _id: 0 };
  const loopbackAddress = "127.0.0.1";
  try {
    const cursor = collection
      .find(
        {},
        {projection: projection}
      );
    const arrayOfClientAddressesAndVisits = await cursor.toArray();
    const meaningfulClientAddresses = arrayOfClientAddressesAndVisits
      .filter(document => document.clientAddress != loopbackAddress)
    console.log("meaningful client addresses", meaningfulClientAddresses);
  } catch(error) {
    console.log("Error getting the client addresses:", error);

  }
}

/**
 * @param {string} clientAddress - client's ip address
 * @param {string} country - country name
 * @param {string} countryCode - two-letter country code
 */
export async function connectToDatabase(clientAddress, country, countryCode) {
  /**
    * The number of total visits to the site
    * @type {number | undefined}
    */
  let totalVisits;
  /**
    * The number of total visitors to the site
    * @type {number | undefined}
    */
  let numberOfVisitors;
  try {
    await client.connect();
    console.log("Successfully connected to the database.")
    // Run the necessary functions.
    // TODO add the client's address to the database
    await addClientAddressAndCountryDataToCollection(clientAddress, country, countryCode);
    // TODO get the total number of visits
    totalVisits = await getTotalVisits();
    // TODO get the total number of visitors
    numberOfVisitors = await getNumberOfVisitors();
    // TODO get the client addresses for the flags
    await getIpAddresses();
  } catch(error) {
    console.log("Database connection error", error);
  } finally {
    await client.close();
    console.log("Closed database connection.")
  }
  return {
    totalVisits,
    numberOfVisitors
  }
}
