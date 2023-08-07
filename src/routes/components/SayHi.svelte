<script>
  import { fade } from 'svelte/transition';
  import { tweened, spring } from 'svelte/motion';
</script>

<div
  id="sayHi"
  transition:fade|global={{ delay: 250, duration: 2500 }}
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
    font-size: 10em;
    color: var(--backgroundWhite);
    font-family: var(--emojiFontFamily);
    text-align: center;
  }

  @media screen and (max-width: 48em) {
    #sayHi {
      display: block;
    }
    h1 {
      font-size: 6em;
    }
  }
</style>
