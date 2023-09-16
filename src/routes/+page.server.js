import { connectToDatabase } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ getClientAddress, locals, fetch }) {
	const baseUrl = "http://ip-api.com/json/";
	//const clientAddress = locals.clientAddress;
	const clientAddress = getClientAddress();
	const fields = "?fields=status,message,country,countryCode";
	const url = baseUrl + clientAddress + fields;

	const response = await fetch(url);
	const data = await response.json();
	const headers = response.headers;
	console.log("JSON data:",data);
	const requestsLeftForThisRateWindow = headers.get('X-Rl');
	const secondsUntilWindowReset = headers.get('X-Ttl');
	let country;
	let countryCode;
	if ( data.status === 'fail' ) {
		country = null;
		countryCode = null;
	} else {
		country = data.country;
		countryCode = data.countryCode;
	}

	const {
		totalVisits,
		numberOfVisitors
	} = await connectToDatabase(clientAddress, country, countryCode);

	/*
	return {
		totalVisits: locals.totalVisits,
		numberOfVisitors: locals.numberOfVisitors
	}
	*/
	return {
		totalVisits,
		numberOfVisitors
	}
}
