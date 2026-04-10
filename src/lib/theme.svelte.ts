let current = $state<'light' | 'dark'>('light');

export const theme = {
	get current() {
		return current;
	},

	/** Call once in onMount — reads localStorage and system preference. */
	init() {
		const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
		const preferred: 'light' | 'dark' = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		current = stored ?? preferred;
		document.documentElement.setAttribute('data-theme', current);
	},

	toggle() {
		current = current === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', current);
		document.documentElement.setAttribute('data-theme', current);
	}
};
