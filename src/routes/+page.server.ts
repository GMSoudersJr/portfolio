import {
	addCountryandCodeToTheDatabase,
	getTotalVisits,
	getVisitsByCountry
} from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, getClientAddress }) => {
	try {
		const clientAddress = getClientAddress();
		const url = `http://ip-api.com/json/${clientAddress}?fields=status,message,country,countryCode`;

		const ipResponse = await fetch(url);
		const data = await ipResponse.json();

		const country: string = data.status === 'fail' ? 'Origin Unknown' : data.country;
		const countryCode: string | null = data.status === 'fail' ? null : data.countryCode;

		await addCountryandCodeToTheDatabase(country, countryCode);
		const totalVisits = await getTotalVisits();
		const visitsByCountryWithCountryCode = await getVisitsByCountry();

		return { totalVisits, visitsByCountryWithCountryCode };
	} catch (error) {
		console.error('load error:', error);
		return { totalVisits: 0, visitsByCountryWithCountryCode: [] };
	}
};
