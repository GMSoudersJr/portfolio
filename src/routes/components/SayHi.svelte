<script>
  import { fade } from 'svelte/transition';
</script>

<h1 transition:fade|global={{ delay: 250, duration: 2500 }} >
  Hi!
</h1>

<style>
  h1 {
    font-size: 60px;
    color: var(--darkestBlue);
  }
</style>
