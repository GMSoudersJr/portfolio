<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import LocaleWelcome from './LocaleWelcome.svelte';
  import Intro from './Intro.svelte';
  import AboutMeButton from './AboutMeButton.svelte';
  import SayHi from './SayHi.svelte';

  onMount(async() => {
    const sayHi = new SayHi({
      target: document.getElementById("/"),
      intro: true,
    });

    let intro;

    // destroy HI! and insert the Intro
    setTimeout(() => {
      sayHi.$destroy();
      intro = new Intro({
        target: document.getElementById("/"),
        intro: true,
      });
    }, 3500);

  })
</script>

<section id="/" class="section-container">

</section>

<style>
  .section-container {
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: var(--baseGallery);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
