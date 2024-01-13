<script>
	import {onDestroy, onMount} from 'svelte';

  import { fade } from 'svelte/transition';
  onMount(async() => {
  })
  onDestroy(() => {
    console.log("SayHi is being destroyed")
  })
</script>

<div
  id="sayHi"
  transition:fade|global={{ delay: 350, duration: 650 }}
>
  <h1>Hello!</h1>
  <h1>
    👋
  </h1>
</div>

<style>
  #sayHi {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 2em;
  }

  h1 {
    font-size: 160px;
    line-height: 76px;
    letter-spacing: -3.2px;
    color: var(--backgroundWhite);
    font-family: var(--emojiFontFamily);
    text-align: center;
  }

  @media screen and (max-width: 48em) {
    #sayHi {
      display: block;
    }
    h1 {
      font-size: 96px;
      letter-spacing: -0.96px;
    }
  }
</style>
