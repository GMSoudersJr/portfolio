<script>
  import { convertStringToFlagEmojiCode } from "$lib/utils";
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

<div class="flag-emoji-container">
  {#each visitsByCountryWithCountryCode as country (country.country)}
    <div
      class="individual-flags"
      id={country.country}
      title={`${country.country} - ${country.visits} views`}
    >
      {#if !country.countryCode}
        🤔
      {:else}
        {convertStringToFlagEmojiCode(country.countryCode)}
      {/if}
    </div>
  {/each}
</div>


<style>
  .flag-emoji-container {
    display: flex;
    gap: 0.3em;
  }
  .individual-flags {
    font-family: var(--emojiFontFamily);
    cursor: help;
  }
</style>
