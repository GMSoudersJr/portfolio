<script>
  import {
    fade,
    blur,
    fly,
    slide,
    scale,
  } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

</script>

<div>
  <h1 transition:fade|global={{ delay: 500, duration: 3000 }}>Hi!  I'm Gerald M. Souders Jr.</h1>
  <h2 transition:blur|global={{ amount: 5, duration: 3000 }}>Blur A Svelte Developer</h2>
  <h3 transition:fly|global={{
      delay: 250,
      duration: 3000,
      x: 500,
      y: 500,
      opacity: 0.5,
      easing: quintInOut
    }}
  >
    Focused on the Frontend
  </h3>
  <h1 transition:slide|global={{
      delay: 250,
      duration: 4000,
      easing: quintInOut,
      axis: 'x'
    }}
  >
    Slide
  </h1>

  <h1 transition:scale|global={{
      delay: 500,
      duration: 3500,
    }}
  >
    Scale
  </h1>
</div>
