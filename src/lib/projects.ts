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
		desc: 'Built for the Armstrong Pull-up Program, a structured 5-day military training routine. Guides you through each session and tracks progress over time. Nothing existing did both the way it needed to be done. After user feedback, replaced the default data displays with custom D3.js charts. Ranked #1 on Google for "Armstrong Pullup Program App" with 1,200+ visitors.',
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
		title: 'Suit Yourself',
		type: 'PWA',
		desc: 'A mobile-first PWA for card-based calisthenics workouts. Built for people doing this with a physical deck. Cards got wet, wore out, nobody remembered which suit meant which exercise. Shipped several iterations: automatic update alerts, swipe gestures and keyboard input, and a stopwatch feature that went out without touching saved workout history.',
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
		num: '03',
		title: 'freeCodeCamp Seoul',
		type: 'Open Source',
		desc: "Joined the Seoul chapter's open source site when the maintainer put out a call for help. Migrated the codebase from Pages Router to App Router, laid the groundwork for Korean translations with next-intl, and reviewed 31 pull requests from other contributors.",
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
		num: '04',
		title: 'Work Smarter Randomizer',
		type: 'Productivity Tool',
		desc: 'Built between classes when the manual process for randomizing student vocabulary words was taking too long. Words shuffle automatically as you type them in. See how far each one lands from where it started. Part of a planned suite of tools for teachers, this is the first.',
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
