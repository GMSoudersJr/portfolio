<script>
  import { fade } from 'svelte/transition';
</script>

<h1 transition:fade|global={{ delay: 250, duration: 2500 }} >
  hello
</h1>

<style>
  h1 {
    font-size: 10em;
    color: var(--backgroundWhite);
    font-family: var(contentTextFontFamily);
  }
</style>
