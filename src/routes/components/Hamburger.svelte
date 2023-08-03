<script>
  import { fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { clickOutside } from '$lib/utils.js';
  function toggleHamburger() {
    const navbar = document.getElementById("navbarUl");
    const hiddenNavItems = document.querySelectorAll(".nav-right");
    navbar.classList.toggle("responsive");
    hiddenNavItems.forEach((item) => {
      item.classList.toggle("show");
    });

    stackedHamburger = !stackedHamburger;
    $angle = stackedHamburger ? 0 : 45;
    $pixels = stackedHamburger ? 0 : 11;
    $disappear = stackedHamburger ? 1 : 0;
  }
  const angle = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
  const pixels = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
  const disappear = tweened(1, {
    duration: 300,
    easing: cubicOut
  })

  function handleClickOutside() {
    if ( !stackedHamburger ) {
      toggleHamburger();
    }
  }

  let stackedHamburger = true;
</script>

<button
  type=button
  class="hamburger-container"
  id="hamburger-container"
  on:click={toggleHamburger}
  style="transform: rotate(-{$angle * 2}deg)"
  title="Click to toggle the menu"
  use:clickOutside
  on:click_outside={handleClickOutside}
>
  <div
    class="hamburger-line"
    id="top"
    style="transform: translate(0, {$pixels}px) rotate(-{$angle}deg);"
  ></div>
  <div
    class="hamburger-line"
    id="middle"
    style="opacity: {$disappear}"
  ></div>
  <div
    class="hamburger-line"
    id="bottom"
    style="transform: translate(0, -{$pixels}px) rotate({$angle}deg);"
  ></div>
</button>

<style>
  button {
    border: none;
    background: none;
  }
  .hamburger-container {
    display: inline-block;
    cursor: pointer;
    aspect-ratio: 1/1;
    box-sizing: border-box;
  }

  .hamburger-line {
    width: 35px;
    height: 5px;
    border-radius:5px;
    background-color: var(--darkestGallery);
    margin: 6px 0;
  }

</style>
