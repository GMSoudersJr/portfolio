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
      title={`${country.country} - ${country.visits} ${country.visits == 1 ? "visit" : "visits"}`}
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    gap: 0.5em;
    padding: 1em;
    background: var(--backgroundOffWhite);
    border-radius: 5px;
  }
  .individual-flags {
    font-family: var(--emojiFontFamily);
    cursor: help;
    font-size: 2rem;
  }
</style>
