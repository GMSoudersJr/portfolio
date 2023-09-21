<script>
  import { convertStringToFlagEmojiCode, sorter } from "$lib/utils";
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
  visitsByCountryWithCountryCode.sort(sorter);

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
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 0.5em;
    padding: 1em;
    background: var(--backgroundOffWhite);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .individual-flags {
    font-family: var(--emojiFontFamily);
    cursor: help;
    font-size: 2rem;
  }
</style>
