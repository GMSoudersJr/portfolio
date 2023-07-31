<script>
  import { socialDetails } from '$lib/socials.js';


  let innerWidth = 0;
  $: displayIconLong = innerWidth <= 1200;
</script>

<svelte:window bind:innerWidth />
<section class="findMe" id="findMe">
  {#each socialDetails as social (social.id)}
  <a
    href={social.href}
    target="_blank"
    referrerpolicy="no-referrer"
    id={social.id}
    class={social.class}
  >
    {#if social.id === "email"}
      {displayIconLong ? social.textLong : social.text}
    {:else}
      <img
        id={`${social.id}-icon`}
        class="icon"
        src={displayIconLong ? social.iconLong: social.icon}
        alt={social.alt}
      />
    {/if}
  </a>
  {/each}
</section>


<style>
  .findMe {
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon-long {
    height: 50px;
  }

  .icon,
  .email {
    height: 50px;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white
  }


  @media screen and (max-width: 1200px) {
    .findMe {
      width: 60%;
      flex-direction: column;
      justify-content: center;
      row-gap: 1em;
    }

    a {
      background-color: var(--backgroundWhite);
      padding: 20px 10px;
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .email {
      color: black;
      font-family: helvetica, system-ui;
      font-weight: 575;
      font-size: 2.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
