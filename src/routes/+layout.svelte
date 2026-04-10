<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme.svelte.js';
	let { children } = $props();
	onMount(() => theme.init());
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to main content</a>

{@render children()}

<style>
	/* ── Reset ──────────────────────────────────────────────────────── */
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	/* ── Design tokens (light) ──────────────────────────────────────── */
	:global(:root) {
		--coral: #d85a30;
		--coral-light: #faece7;
		--coral-border: #f0997b;
		--coral-stat-num: #712b13;
		--coral-stat-label: #993c1d;

		--purple: #534ab7;
		--purple-light: #eeedfe;
		--purple-border: #afa9ec;

		--teal: #0f6e56;
		--teal-light: #e1f5ee;
		--teal-border: #5dcaa5;

		--amber: #ba7517;
		--amber-light: #faeeda;
		--amber-border: #ef9f27;

		--color-text-primary: #111111;
		--color-text-secondary: #555555;
		--color-text-tertiary: #999999;
		--color-background-primary: #ffffff;
		--color-background-secondary: #f5f5f5;
		--color-border-secondary: #d8d8d8;
		--color-border-tertiary: #ebebeb;

		--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		--nav-height: 68px;
	}

	:global(:root) {
		@media (max-width: 640px) {
			--nav-height: 64px;
		}
	}

	/* ── Dark mode overrides ────────────────────────────────────────── */
	:global([data-theme='dark']) {
		--coral-light: #2b1209;
		--coral-border: #7a3520;
		--coral-stat-num: #f0997b;
		--coral-stat-label: #d07050;

		--purple-light: #1a1733;
		--purple-border: #3d3780;

		--teal-light: #091f17;
		--teal-border: #0d4a38;

		--amber-light: #201507;
		--amber-border: #7a4d0f;

		--color-text-primary: #eeeeee;
		--color-text-secondary: #999999;
		--color-text-tertiary: #555555;
		--color-background-primary: #0f0f0f;
		--color-background-secondary: #1a1a1a;
		--color-border-secondary: #2a2a2a;
		--color-border-tertiary: #1e1e1e;
	}

	/* ── Base ───────────────────────────────────────────────────────── */
	:global(body) {
		font-family: var(--font-sans);
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		line-height: 1.5;
	}

	/* ── Focus visible ──────────────────────────────────────────────── */
	:global(:focus-visible) {
		outline: 2px solid var(--coral);
		outline-offset: 3px;
		border-radius: 3px;
	}

	/* ── Scroll offset for sticky nav ──────────────────────────────── */
	:global(section[id]) {
		scroll-margin-top: var(--nav-height);
	}

	/* ── Skip link ──────────────────────────────────────────────────── */
	.skip-link {
		position: absolute;
		top: -100%;
		left: 0;
		padding: 8px 20px;
		background: var(--coral);
		color: #fff;
		font-family: var(--font-sans);
		font-size: 14px;
		font-weight: 500;
		text-decoration: none;
		border-radius: 0 0 8px 0;
		z-index: 9999;
		transition: top 0.1s;
	}
	.skip-link:focus {
		top: 0;
	}

	/* ── Tag styles (shared) ────────────────────────────────────────── */
	:global(.tag) {
		font-size: 11px;
		font-weight: 500;
		padding: 3px 10px;
		border-radius: 100px;
		border: 1.5px solid;
	}
	:global(.tag-react) { background: #e6f1fb; color: #0c447c; border-color: #85b7eb; }
	:global(.tag-svelte) { background: #faece7; color: #712b13; border-color: #f0997b; }
	:global(.tag-ts) { background: #eeedfe; color: #3c3489; border-color: #afa9ec; }
	:global(.tag-next) { background: #f1efe8; color: #444441; border-color: #b4b2a9; }
	:global(.tag-mongo) { background: #eaf3de; color: #27500a; border-color: #97c459; }
	:global(.tag-sk) { background: #e1f5ee; color: #085041; border-color: #5dcaa5; }

	:global([data-theme='dark'] .tag-react) { background: #0d2035; color: #6aabdd; border-color: #2a5880; }
	:global([data-theme='dark'] .tag-svelte) { background: #2b1209; color: #f0997b; border-color: #7a3520; }
	:global([data-theme='dark'] .tag-ts) { background: #1a1733; color: #9b95e8; border-color: #3d3780; }
	:global([data-theme='dark'] .tag-next) { background: #1e1e1e; color: #aaaaaa; border-color: #444444; }
	:global([data-theme='dark'] .tag-mongo) { background: #0f1f09; color: #7dbb45; border-color: #2e5510; }
	:global([data-theme='dark'] .tag-sk) { background: #091f17; color: #5dcaa5; border-color: #0d4a38; }

	/* ── Reduced motion ─────────────────────────────────────────────── */
	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}
</style>
