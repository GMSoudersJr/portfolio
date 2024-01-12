<script lang="ts">
  import { onMount } from 'svelte';
  import Intro from './Intro.svelte';
  import SayHi from './SayHi.svelte';

  let display;
  onMount(async() => {
    display = SayHi;
      // destroy HI! and insert the Intro
    setTimeout(() => {
      display.$destroy;
    }, 500);
    setTimeout(() => {
      display = Intro;
    }, 1950);
  })
  $: show = display;
</script>

<section id="/" class="section-container">
  <svelte:component this={show}/>
</section>

<style>
  .section-container {
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: var(--backgroundSplash);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
