<script>
	import CountryFlags from './CountryFlags.svelte';
	/**
	 * a parameter to show the number of visits
	 * @type {?number}
	 */
	export let totalVisits;

	/**
	 * @typedef {Object} CountryData
	 * @property {number} visits
	 * @property {string} country
	 * @property {string} countryCode
	 */

	/**
	 * @type {CountryData[]}
	 */
	export let visitsByCountryWithCountryCode;
</script>

<div class="visitors" id="visitor-widget">
	<h2 class="section-title">Visitors</h2>
	<CountryFlags {visitsByCountryWithCountryCode} />
</div>

<style>
	.visitors {
		box-sizing: border-box;
		width: 60%;
		margin-bottom: 3rem;
	}

	.section-title {
		color: var(--contentText);
		font-size: var(--sectionTitleFontSize);
		font-family: var(--sectionTitleFontFamily);
		line-height: var(--sectionTitleLineHeight);
		letter-spacing: var(--sectionTitleLetterSpacing);
	}

	@media screen and (max-width: 80em) {
	}
	@media screen and (max-width: 64em) {
		.visitors {
			width: 100%;
		}
		.section-title {
			text-align: center;
		}
	}
	@media screen and (max-width: 48em) {
	}
	@media screen and (max-width: 40em) {
	}
</style>
