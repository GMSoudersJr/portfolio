<script>
  import { fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  function handleClick() {
    open = !open;

    $angle = open ? 0 : 45;
    $pixels = open ? 0 : 11;
    $disappear = open ? 1 : 0;
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

  let open = true;
</script>

<div
  class="hamburger-container"
  id="hamburger-container"
  on:click={handleClick}
  style="transform: rotate(-{$angle * 2}deg)"
  title="Hamburger"
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
</div>

<style>
  .hamburger-container {
    display: inline-block;
    cursor: pointer;
    aspect-ratio: 1/1;
    box-sizing: border-box;
  }

  .hamburger-line {
    width: 35px;
    height: 5px;
    background-color: var(--backgroundBlue);
    margin: 6px 0;
  }

</style>
