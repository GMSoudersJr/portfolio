/**
 * Sort comparator — highest visits first.
 * @param {{ visits: number }} a
 * @param {{ visits: number }} b
 */
export function sorter(a, b) {
	return b.visits - a.visits;
}

/**
 * Smoothly scrolls to a section by id, respecting prefers-reduced-motion.
 * @param {string} id
 */
export function scrollTo(id) {
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	document.getElementById(id)?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
}
