// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			totalVisits?: number | undefined;
			numberOfVisitors?: number | undefined;
			clientAddress?: string | undefined;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
