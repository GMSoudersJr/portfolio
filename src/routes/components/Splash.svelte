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
    let welcomeDate;

    // destroy HI! and insert the Intro
    setTimeout(() => {
      sayHi.$destroy();
      intro = new Intro({
        target: document.getElementById("/"),
        intro: true,
      });
    }, 3500);


    /*
    setTimeout(() => {
      intro.$destroy();
      const aboutMeButton = new AboutMeButton({
        target: document.getElementById("/"),
        intro: true,
      });
    }, 7000);
     */

  })
</script>

<section id="/" class="section-container">

</section>

<style>
  .section-container {
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: var(--backgroundWhite);
  /*background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_j7h3tJftmlr49eJAhoFREfhOcJmHXTUcsO_yuuLuPxyjux088OAIxgUzDdT3jvGJQth3rrlB3yKtiBVjg-g_lLlTBaZj8c6BUicea-ZsQyOPK4CD_KS1GR9bVWa8-D1aVveK3cPzlP0dSoqz5v7M8Xg=w1180-h944-s-no?authuser=0");
    background-size: cover;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
