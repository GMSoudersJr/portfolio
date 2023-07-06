<script>
  import LocaleWelcome from './LocaleWelcome.svelte';
  import Greeting from './Greeting.svelte';
  import AboutMeButton from './AboutMeButton.svelte';

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(async() => {
    const greeting = new Greeting({
      target: document.getElementById("splash"),
      intro: true,
    });

    let welcomeDate;

    setTimeout(() => {
      greeting.$destroy();
      welcomeDate = new LocaleWelcome({
        target: document.getElementById("splash"),
        intro: true,
      });
    }, 5000);


    setTimeout(() => {
      welcomeDate.$destroy();
      const aboutMeButton = new AboutMeButton({
        target: document.getElementById("splash"),
        intro: true,
      });
    }, 7000);


  })
</script>

<section id="splash" class="section-container">
</section>

<style>
  .section-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
