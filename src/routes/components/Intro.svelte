<script lang="ts">
  import { typewriter } from '$lib/utils.js';
</script>

<div class="intro-container">
  <h1 transition:typewriter|global={{ delay: 200 }}>
   I'm Gerald Souders
  </h1>
  <h2 transition:typewriter|global={{ delay: 1500 }}>
    A Full-Stack Web Developer
  </h2>
  <h2 transition:typewriter|global={{ delay: 3800 }}>
    Solving Problems with Code
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
