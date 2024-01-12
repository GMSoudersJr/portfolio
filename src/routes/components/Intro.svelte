<script>
  import { typewriter } from '$lib/utils.js';
</script>

<div class="intro-container">
  <h1 transition:typewriter|global={{ delay: 1500 }}>
   I'm Gerald M. Souders Jr.
  </h1>
  <h2 transition:typewriter|global={{ delay: 4000 }}>
    A Svelte Developer
  </h2>
  <h2 transition:typewriter|global={{ delay: 6000 }}>
    Making Things Work
  </h2>
</div>

<style>
  .intro-container {
    text-align: center;
    max-width: 600px;
    box-sizing: border-box;
  }
  h1, h2 {
    color: var(--backgroundWhite);
    font-family: var(--sectionTitleFontFamily);
  }
  h1 {
    font-size: 48px;
    line-height: 52.8px;
    letter-spacing: -0.03em;
  }
  h2 {
    font-size: 40px;
    line-height: 45.2px;
    letter-spacing: -0.025em;
  }

  @media screen and (max-width: 40em) {
    .intro-container {
      padding: 0 12px;
    }
  }
</style>
