<script>
  import HappyDay from './components/HappyDay.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

<Navbar />
<slot />

<style>
  :root {
    --darkest: #1A120B;
    --dark: #3C2A21;
    --light: #D5CEA3;
    --lightest: #E5E5CB;
  }

  :root {
    background-image: linear-gradient(var(--darkest), var(--light));
  }

</style>
