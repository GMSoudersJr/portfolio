<script>
  import FindMe from './components/FindMe.svelte';
  import Splash from './components/Splash.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Projects from './components/Projects.svelte';

</script>

<div class="container">
  <Splash />
  <AboutMe />
  <Projects />
  <FindMe />
</div>

<style>
  * {
    color: #E5E5CB
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
  }

</style>
