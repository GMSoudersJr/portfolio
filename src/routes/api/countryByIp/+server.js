import {json} from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ getClientAddress, fetch, locals }) {
	const baseUrl = "http://ip-api.com/json/";
  const clientAddress = getClientAddress();
	const fields = "?fields=status,message,country,countryCode";
	const url = baseUrl + clientAddress + fields;

	const response = await fetch(url);
	const headers = response.headers;
	const data = await response.json();
	locals.requestsLeftForThisRateWindow = headers.get('X-Rl');
	locals.secondsUntilWindowReset = headers.get('X-Ttl');
	let country;
	let countryCode;
	if ( data.status === 'fail' ) {
		country = "Origin Unknown";
		countryCode = null;
	} else {
		country = data.country;
		countryCode = data.countryCode;
	}
	return json({ "country": country, "countryCode": countryCode });
}
