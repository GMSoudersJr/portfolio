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

<div class="widget" id="visitor-widget">
  <div class="header-section">
    <div
      class=" emoji"
      title={`Globally - ${totalVisits} views`}
    >
      🗺
    </div>
    <h2>Visitors</h2>
    <p>(according to ip addresses)</p>
  </div>
  <CountryFlags
    {visitsByCountryWithCountryCode}
  />
</div>


<style>
  .widget {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 3px solid #4169e1;
    padding: 0px 0px 1em 0px;
    margin-bottom: 1em;
  }

  .header-section {
    width: 100%;
    background-color: var(--backgroundWhite);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    gap: 0em;
    padding-bottom: 0.5em;
  }

  .header-section h2, p{
    color: var(--charcoalBlack);
    margin: 0px auto;
  }
  .emoji {
    font-family: var(--emojiFontFamily);
    font-size: 3em;
    cursor: help;
  }
</style>
