<script>
  import { fade } from 'svelte/transition';
</script>

<div
  id="sayHi"
  transition:fade|global={{ delay: 250, duration: 2500 }}
>
  <h1>Hi</h1>
  <h1>👋</h1>
</div>

<style>
  #sayHi {
    display: grid;
    grid-auto-flow: column;
    gap: 2em;

  }
  h1 {
    font-size: 10em;
    color: var(--backgroundWhite);
    font-family: var(--emojiFontFamily);
  }
</style>
