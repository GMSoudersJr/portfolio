<script>
  import { scale } from 'svelte/transition';
  import { bounceInOut } from 'svelte/easing';
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

<button
  type="button"
  class="button"
  id="about-me-button"
  transition:scale|global={{
      delay: 0,
      duration: 3000,
      opacity: 0,
      start: 20,
      easing: bounceInOut
  }}
  on:click={handleClick}
>
  About Me
</button>

<style>
  .button {
    box-sizing: border-box;
    padding: 12px 15px;
    font-size: 18px;
  }
</style>
