<script>
  import LocaleWelcome from './LocaleWelcome.svelte';
  import { goto } from '$app/navigation';

  async function handleClick() {
    /*
    const aboutMe = document.getElementById("aboutMe");
    aboutMe.scrollIntoView({
      behavior: 'smooth',
    });
     */
    await goto('#aboutMe', {
      noScroll: false,
      replaceState: false,
      keepFocus: false,
    });
  }
</script>

<section class="section-container">
  <h1>Hi!  I'm Gerald M. Souders Jr.</h1>
  <h2>I'm a Full Stack Svelte Developer</h2>
  <h3>Focused on the Frontend</h3>
  <LocaleWelcome />
  <button
    type="button"
    class="button"
    on:click={handleClick}
  >
    About Me
  </button>
</section>

<style>
  .section-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#1A120B, #D5CEA3);
  }
  .button {
    box-sizing: border-box;
    padding: 12px 15px;
    font-size: 18px;
  }
</style>
