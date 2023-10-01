import { json } from "@sveltejs/kit"
import {
  addCountryandCodeToTheDatabase,
  getTotalVisits,
  getVisitsByCountry,
} from "$lib/db"

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { country, countryCode } = await request.json();
  try {
    await addCountryandCodeToTheDatabase(country, countryCode);
    return json("Success", {status: 200,statusText: "Successully added info to the database."});
  } catch(error) {
    console.log(error)
    return json("error")
  }
}

export async function GET() {
  try {
    let totalVisits = await getTotalVisits();
    let visitsByCountryWithCountryCode = await getVisitsByCountry();
    return json({ totalVisits, visitsByCountryWithCountryCode },
      { status: 200, statusText: "successfully received database info." }
  );
  } catch (error) {
    console.log("database +server.svelte", error);
    return json("error");
  }
}
