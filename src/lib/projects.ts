export interface Tag {
	label: string;
	cls: string;
}

export interface Project {
	num: string;
	title: string;
	type: string;
	desc: string;
	tags: Tag[];
	url: string;
	accent: string;
	accentLight: string;
	image: string | null;
}

export const projects: Project[] = [
	{
		num: '01',
		title: 'Rep Yourself',
		type: 'PWA',
		desc: 'Rep Yourself is a tracker for the Armstrong Pull-up Program, a structured 5-day military training protocol. After nearly 10 rounds of running to the park and trying to remember my numbers on the way home, I finally built something to do it properly. Guides you through each session, charts your progress, and keeps everything on-device. No accounts, no bloat.',
		tags: [
			{ label: 'React', cls: 'tag-react' },
			{ label: 'TypeScript', cls: 'tag-ts' },
			{ label: 'Next.js', cls: 'tag-next' }
		],
		url: 'https://www.repyourself.app',
		accent: 'var(--purple)',
		accentLight: 'var(--purple-light)',
		image: 'screenshots/rep-yourself.webp'
	},
	{
		num: '02',
		title: 'freeCodeCamp Seoul',
		type: 'Open Source',
		desc: 'The freeCodeCamp Seoul community site was still on the Pages Router when App Router had already landed. I joined when the organizer put out a call for help, migrated the codebase, cleaned up the styling, and laid the groundwork for Korean translations. Reviewed 30+ pull requests as part of the team.',
		tags: [
			{ label: 'React', cls: 'tag-react' },
			{ label: 'TypeScript', cls: 'tag-ts' },
			{ label: 'Next.js', cls: 'tag-next' }
		],
		url: 'https://fcc-seoul.fly.dev/',
		accent: 'var(--teal)',
		accentLight: 'var(--teal-light)',
		image: 'screenshots/freeCodeCamp-Seoul.webp'
	},
	{
		num: '03',
		title: 'Suit Yourself',
		type: 'PWA',
		desc: 'I used to take a physical deck of cards to the park for calisthenics workouts. Cards blew away, got damaged, and remembering which exercise went with which suit was a pain. Suit Yourself fixes all of that. Shuffle the deck, assign an exercise to each suit, and work through the draw — the card value is your rep count. 52 exercises to choose from, Playwright-tested because 52 cards is a lot to verify by hand.',
		tags: [
			{ label: 'Svelte', cls: 'tag-svelte' },
			{ label: 'TypeScript', cls: 'tag-ts' }
		],
		url: 'https://www.suityourself.app',
		accent: 'var(--coral)',
		accentLight: 'var(--coral-light)',
		image: 'screenshots/suit-yourself.webp'
	},
	{
		num: '04',
		title: 'Running on Xero',
		type: 'Blog',
		desc: "My personal blog about 15 years of running and moving in Xero Shoes. Minimalist footwear isn't a trend for me — it's just how I move. The blog covers the journey through photos and entries from wherever I happen to be running. Built with SvelteKit and MongoDB because I wanted full control over the content and the stack.",
		tags: [
			{ label: 'SvelteKit', cls: 'tag-sk' },
			{ label: 'MongoDB', cls: 'tag-mongo' }
		],
		url: 'https://running-on-xero.vercel.app/',
		accent: 'var(--amber)',
		accentLight: 'var(--amber-light)',
		image: 'screenshots/running-on-xero.webp'
	},
	{
		num: '05',
		title: 'Encrypted PO Generator',
		type: 'Business Tool',
		desc: 'Built for a real client who needed a bespoke system to generate purchase orders and track data for reports. The user fills in payee details, builds the order, selects from their saved payees, previews the PO, and downloads the PDF. Payee data is encrypted before it ever touches the database. This is the sanitized version — client details removed.',
		tags: [
			{ label: 'SvelteKit', cls: 'tag-sk' },
			{ label: 'MongoDB', cls: 'tag-mongo' }
		],
		url: 'https://portfolio-po-generator.vercel.app/',
		accent: 'var(--purple)',
		accentLight: 'var(--purple-light)',
		image: 'screenshots/po-generator.webp'
	},
	{
		num: '06',
		title: 'Work Smarter Randomizer',
		type: 'Productivity Tool',
		desc: 'Between classes, I was handed a book of vocabulary words to randomize for student tests and a very manual process to do it. I still had to type the words in, but the app handled the randomizing so I could stop thinking about it. Paste the words in order, shuffle them, and see how far each one landed from where it started. Copy them one by one or grab the whole list. The "Work Smarter" name was meant to be a suite. This is the first tool.',
		tags: [
			{ label: 'Svelte', cls: 'tag-svelte' },
			{ label: 'TypeScript', cls: 'tag-ts' }
		],
		url: 'https://work-smarter.vercel.app/randomizer',
		accent: 'var(--teal)',
		accentLight: 'var(--teal-light)',
		image: 'screenshots/work-smarter-randomizer.webp'
	}
];
