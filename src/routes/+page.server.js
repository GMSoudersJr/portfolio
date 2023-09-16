/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

	return {
		totalVisits: locals.totalVisits,
		numberOfVisitors: locals.numberOfVisitors
	}
}
