<script>
  import CountryFlags from "./CountryFlags.svelte";
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

<div class="widget">
  <div
    class=" emoji"
    title={`Globally - ${totalVisits} views`}
  >
    🗺
  </div>
  <CountryFlags
    {visitsByCountryWithCountryCode}
  />
</div>


<style>
  .widget {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
  }

  .emoji {
    font-family: var(--emojiFontFamily);
    cursor: help;
  }
</style>
