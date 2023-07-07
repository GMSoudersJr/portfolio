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

<div class="intro-container">
  <h1
    transition:fade|global={{ delay: 0, duration: 3000 }}
  >
   I'm Gerald M. Souders Jr.
  </h1>
  <h2
    transition:blur|global={{
      delay: 50,
      amount: 5,
      duration: 1950
    }}
  >
    A Svelte Developer
  </h2>
  <h3
    transition:fly|global={{
      delay: 650,
      duration: 2000,
      x: 0,
      y: "-3rem",
      opacity: 0,
      easing: bounceInOut
    }}
  >
    Focused on the frontend
  </h3>
</div>

<style>
  .intro-container {
    text-align: center;
  }
</style>
