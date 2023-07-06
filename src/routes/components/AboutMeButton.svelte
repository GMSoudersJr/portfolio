<script>
  import { fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
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
  transition:fly|global={{
      delay: 0,
      duration: 3000,
      x: 500,
      y: 500,
      opacity: 0.5,
      easing: quintInOut
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
