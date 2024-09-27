/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	try {
		const ipAddressResponse = await fetch('/api/countryByIp');
		const { country, countryCode } = await ipAddressResponse.json();

		const postToDatabaseResponse = await fetch('/api/visitors', {
			method: 'POST',
			body: JSON.stringify({ country, countryCode }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const databaseResponse = await postToDatabaseResponse.json();
		console.log('add to database response', databaseResponse);

		const getFromDatabaseResponse = await fetch('/api/visitors', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { totalVisits, visitsByCountryWithCountryCode } = await getFromDatabaseResponse.json();

		return {
			totalVisits,
			visitsByCountryWithCountryCode
		};
	} catch (error) {
		console.log(error);
	}
}
