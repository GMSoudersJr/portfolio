<script lang="ts">
  import Footer from './components/Footer.svelte';
  import '../app.css';

</script>

<svelte:head>
  <title>
    Gerald Souders
  </title>
</svelte:head>

<main class="main-layout bg-flow">
  <slot />
</main>

<Footer />

<style>
  .main-layout {
    width: 100%;
  }
</style>
