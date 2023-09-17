import { connectToDatabase } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ getClientAddress, fetch }) {
	const baseUrl = "http://ip-api.com/json/";
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
		country = "Origin Unknown";
		countryCode = null;
	} else {
		country = data.country;
		countryCode = data.countryCode;
	}

	const {
		totalVisits,
		visitsByCountryWithCountryCode
	} = await connectToDatabase(country, countryCode);

	return {
		totalVisits,
		visitsByCountryWithCountryCode
	}
}
