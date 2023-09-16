<script>
  import Contact from './components/Contact.svelte';
  import Splash from './components/Splash.svelte';
  import AboutMe from './components/AboutMe.svelte';
  import Projects from './components/Projects.svelte';
  import Footer from './components/Footer.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);
</script>

<div class="container">
  <Splash />
  <AboutMe />
  <Projects />
  <Contact />
  <h1>{data.count}</h1>
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
  h1 {
    color: black;
  }

</style>
