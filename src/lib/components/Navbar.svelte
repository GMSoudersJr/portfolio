<script lang="ts">
	import { tick } from 'svelte';
	import { theme } from '$lib/theme.svelte.js';
	import { scrollTo as scrollToSection } from '$lib/utils.js';

	let menuOpen = $state(false);

	async function scrollTo(id: string) {
		menuOpen = false;
		await tick();
		scrollToSection(id);
	}
</script>

{#snippet themeIcon()}
	{#if theme.current === 'light'}
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
		</svg>
	{:else}
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="5"/>
			<line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
			<line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
		</svg>
	{/if}
{/snippet}

<nav class="nav" aria-label="Primary navigation">
	<a class="nav-logo" href="/" aria-label="Gerald Souders — home">
		Gerald <span style="color:var(--coral)" aria-hidden="true">Souders</span>
	</a>

	<!-- Desktop links -->
	<ul class="nav-links" role="list">
		<li><button type="button" class="nav-pill" onclick={() => scrollTo('work')}>Work</button></li>
		<li><button type="button" class="nav-pill" onclick={() => scrollTo('about')}>About</button></li>
		<li><button type="button" class="nav-pill" onclick={() => scrollTo('contact')}>Contact</button></li>
		<li>
			<button
				type="button"
				class="theme-toggle"
				onclick={() => theme.toggle()}
				aria-label="Switch to {theme.current === 'light' ? 'dark' : 'light'} mode"
			>
				{@render themeIcon()}
			</button>
		</li>
	</ul>

	<!-- Mobile controls -->
	<div class="mobile-controls">
		<button
			type="button"
			class="theme-toggle"
			onclick={() => theme.toggle()}
			aria-label="Switch to {theme.current === 'light' ? 'dark' : 'light'} mode"
		>
			{@render themeIcon()}
		</button>
		<button
			type="button"
			class="hamburger"
			onclick={() => (menuOpen = !menuOpen)}
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
		>
			{#if menuOpen}
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
					<line x1="2" y1="2" x2="16" y2="16"/><line x1="16" y1="2" x2="2" y2="16"/>
				</svg>
			{:else}
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
					<line x1="1" y1="4" x2="17" y2="4"/><line x1="1" y1="9" x2="17" y2="9"/><line x1="1" y1="14" x2="17" y2="14"/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile dropdown -->
{#if menuOpen}
	<div class="mobile-menu" id="mobile-menu" aria-label="Navigation menu">
		<ul role="list">
			<li><button type="button" onclick={() => scrollTo('work')}>Work</button></li>
			<li><button type="button" onclick={() => scrollTo('about')}>About</button></li>
			<li><button type="button" onclick={() => scrollTo('contact')}>Contact</button></li>
		</ul>
	</div>
{/if}

<style>
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 32px;
		border-bottom: 2px solid var(--color-text-primary);
		background: var(--color-background-primary);
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.nav-logo {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: -0.5px;
		text-decoration: none;
		color: var(--color-text-primary);
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 8px;
		list-style: none;
	}
	.nav-pill {
		font-size: 12px;
		font-weight: 500;
		padding: 6px 14px;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 100px;
		cursor: pointer;
		color: var(--color-text-primary);
		background: transparent;
		transition: background 0.15s, color 0.15s;
		font-family: inherit;
	}
	.nav-pill:hover {
		background: var(--color-text-primary);
		color: var(--color-background-primary);
	}
	.theme-toggle {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1.5px solid var(--color-text-primary);
		background: transparent;
		color: var(--color-text-primary);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.15s, color 0.15s;
		flex-shrink: 0;
	}
	.theme-toggle:hover {
		background: var(--color-text-primary);
		color: var(--color-background-primary);
	}
	.mobile-controls {
		display: none;
		align-items: center;
		gap: 8px;
	}
	.hamburger {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1.5px solid var(--color-text-primary);
		background: transparent;
		color: var(--color-text-primary);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.15s, color 0.15s;
	}
	.hamburger:hover {
		background: var(--color-text-primary);
		color: var(--color-background-primary);
	}
	.mobile-menu {
		position: sticky;
		top: var(--nav-height);
		z-index: 99;
		background: var(--color-background-primary);
		border-bottom: 2px solid var(--color-text-primary);
		padding: 12px 16px;
	}
	.mobile-menu ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.mobile-menu button {
		width: 100%;
		text-align: left;
		padding: 12px 16px;
		font-size: 15px;
		font-weight: 500;
		font-family: inherit;
		background: transparent;
		border: none;
		border-radius: 8px;
		color: var(--color-text-primary);
		cursor: pointer;
		transition: background 0.15s;
	}
	.mobile-menu button:hover {
		background: var(--color-background-secondary);
	}

	@media (max-width: 640px) {
		.nav { padding: 14px 16px; }
		.nav-links { display: none; }
		.mobile-controls { display: flex; }
	}
</style>
