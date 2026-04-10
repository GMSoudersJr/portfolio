<script lang="ts">
	import { sorter } from '$lib/utils.js';

	interface CountryData {
		visits: number;
		country: string;
		countryCode: string | null;
	}

	interface Props {
		visitsByCountryWithCountryCode: CountryData[];
		totalVisits: number;
	}

	let { visitsByCountryWithCountryCode, totalVisits }: Props = $props();

	let sorted = $derived(
		visitsByCountryWithCountryCode ? [...visitsByCountryWithCountryCode].sort(sorter) : []
	);

	function flagUrl(code: string) {
		return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
	}

	function flagUrl2x(code: string) {
		return `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
	}
</script>

<section class="section" aria-labelledby="visitors-heading">
	<div class="section-header">
		<h2 class="section-title" id="visitors-heading">Visitors from around the world</h2>
		<span class="section-count">{totalVisits.toLocaleString()} total visits</span>
	</div>
	<div class="flags-wrap">
		<p class="flags-title" id="flags-label">Countries that have visited</p>
		<ul class="flags-flow" role="list" aria-labelledby="flags-label">
			{#each sorted as country (country.country)}
				<li
					class="flag-item"
					title="{country.country} — {country.visits} {country.visits === 1 ? 'visit' : 'visits'}"
				>
					{#if country.countryCode}
						<img
							src={flagUrl(country.countryCode)}
							srcset="{flagUrl(country.countryCode)} 1x, {flagUrl2x(country.countryCode)} 2x"
							alt="{country.country} — {country.visits} {country.visits === 1 ? 'visit' : 'visits'}"
							width="28"
							height="21"
							loading="lazy"
						/>
					{:else}
						<span class="flag-unknown" aria-label="Unknown country">?</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.section {
		padding: 52px 32px;
		border-bottom: 2px solid var(--color-text-primary);
	}
	.section-header {
		display: flex;
		align-items: baseline;
		gap: 16px;
		margin-bottom: 36px;
		flex-wrap: wrap;
	}
	.section-title {
		font-size: 26px;
		font-weight: 500;
		letter-spacing: -0.5px;
	}
	.section-count {
		font-size: 13px;
		color: var(--color-text-tertiary);
	}
	.flags-wrap {
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		padding: 28px;
		overflow: hidden;
	}
	.flags-title {
		font-size: 13px;
		font-weight: 500;
		color: var(--color-text-secondary);
		margin-bottom: 16px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	.flags-flow {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		list-style: none;
	}
	.flag-item {
		cursor: default;
		line-height: 0;
	}
	.flag-item img {
		display: block;
		border-radius: 2px;
		box-shadow: 0 0 0 1px var(--color-border-secondary);
	}
	.flag-unknown {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 21px;
		border-radius: 2px;
		box-shadow: 0 0 0 1px var(--color-border-secondary);
		background: var(--color-background-secondary);
		font-size: 10px;
		font-weight: 600;
		color: var(--color-text-tertiary);
		line-height: 1;
	}

	@media (max-width: 640px) {
		.section { padding: 40px 16px; }
		.flags-wrap { padding: 20px 16px; }
	}
</style>
