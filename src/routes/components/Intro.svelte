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
  import { typewriter } from '$lib/utils.js';

</script>

<div
  class="intro-container"
  transition:fade|global={{ delay: 0, duration: 300 }}
>
  <h1 transition:typewriter|global>
   I'm Gerald M. Souders Jr.
  </h1>
  <h2 transition:typewriter|global={{ delay: 3000 }}>
    A Svelte Developer
  </h2>
  <h3 transition:typewriter|global={{ delay: 5000 }}>
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
