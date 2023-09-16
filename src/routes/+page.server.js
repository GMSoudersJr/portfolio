/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

	return {
		count: locals.totalVisits,
		numberOfVisitors: locals.numberOfVisitors
	}
}
