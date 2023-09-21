import { connectToDatabase } from '$lib/db';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	/*
	const clientAddress = event.getClientAddress();

	const {
		totalVisits,
		numberOfVisitors
	} = await connectToDatabase(clientAddress);

	event.locals.totalVisits = totalVisits;
	event.locals.numberOfVisitors = numberOfVisitors;
	*/
	return resolve(event);
}
