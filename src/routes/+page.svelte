<script>
  import Contact from './components/Contact.svelte';
  import Splash from './components/Splash.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Projects from './components/Projects.svelte';
  import CounterWidget from './components/CounterWidget.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  $: ({totalVisits, visitsByCountryWithCountryCode} = data);
  console.log(data);
</script>

<div class="container">
  <Splash />
  <AboutMe />
  <Projects />
  <Contact />
  <CounterWidget
    {totalVisits}
    {visitsByCountryWithCountryCode}
  />
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
