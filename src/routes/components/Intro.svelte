<script>
  import {
    fade,
    blur,
    fly,
    slide,
    scale,
  } from 'svelte/transition';
  import {
    bounceInOut,
    quintInOut
  } from 'svelte/easing';

</script>

<div
  class="intro-container"
  transition:fade|global={{ delay: 0, duration: 3000 }}
>
  <h1>
   I'm Gerald M. Souders Jr.
  </h1>
  <h2>
    A Svelte Developer
  </h2>
  <h3>
    Making Things Work
  </h3>
</div>

<style>
  .intro-container {
    text-align: center;
    width: 90%;
  }
  h1, h2, h3 {
    color: var(--backgroundWhite);
    font-family: var(--sectionTitleFontFamily);
  }
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 2em;
  }
</style>
