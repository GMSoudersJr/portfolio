<script>
  import { localeDateString } from '$lib/utils.js';
  import { fade } from 'svelte/transition';
</script>

<section transition:fade|global={{ delay: 250, duration: 300 }} class="section-container">
  <h2>{localeDateString()}</h2>
</section>

<style>
</style>
