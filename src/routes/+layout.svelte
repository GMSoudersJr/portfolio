<script lang="ts">
  import Footer from './components/Footer.svelte';
  import '../app.css';

</script>

<svelte:head>
  <title>
    Gerald Souders
  </title>
</svelte:head>

<div class="main-layout bg-flow">
  <slot />
</div>

<Footer />

<style>
  .main-layout {
    width: 100%;
  }
</style>
