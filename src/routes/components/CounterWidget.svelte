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

<section class="widget visitor-container" id="visitor-widget">
  <h1 class="section-title poppins-extrabold">
    <span class="gradient-text">
      Visitors 🗺
    </span>
  </h1>
  <CountryFlags
    {visitsByCountryWithCountryCode}
  />
</section>


<style>
  .visitor-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1rem;
    margin-bottom: 1em;
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .section-title {
    font-size: var(--sectionTitleFontSize);
    line-height: var(--sectionTitleLineHeight);
    letter-spacing: var(--sectionTitleLetterSpacing);
  }

  @media screen and (max-width: 80em) {
  }
  @media screen and (max-width: 64em) {
  }
  @media screen and (max-width: 48em) {
  }
  @media screen and (max-width: 40em) {
    .social-icons-container {
      justify-content: center;
    }
    .section-title {
      text-align: center;
    }
  }
</style>
