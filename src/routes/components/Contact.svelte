<script>
  import { socialDetails } from '$lib/socials.js';

  let innerWidth = 0;
  $: displayIconLong = innerWidth <= 64 * 16;
</script>

<svelte:window bind:innerWidth />
<section class="contact" id="contact">
  <h1 class="section-title">
    Contact
  </h1>
  <div class="contact-container">
  {#each socialDetails as social (social.id)}
    <a
      href={social.href}
      target="_blank"
      referrerpolicy="no-referrer"
      id={social.id}
      class={social.class}
      title={social.title}
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
  </div>
</section>


<style>
  section {
    display: grid;
    height: 100vh;
    grid: repeat(2, 1fr) / 1fr;
    width: 60%;
    scroll-margin-top: 56px;
  }

  .section-title {
    color: var(--contentText);
    font-size: var(--sectionTitleFontSize);
    font-family: var(--sectionTitleFontFamily);
    line-height: var(--sectionTitleLineHeight);
    letter-spacing: var(--sectionTitleLetterSpacing);
    align-self: start;
  }

  .contact-container {
    width: 100%;
    align-self: start;
    display: grid;
    grid-template-row: repeat(6, 1fr);
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 15px;
    border: 3px solid var(--backgroundWhite);
    border-radius: 50%;
    background-image: linear-gradient(120deg, var(--darkerBlue), var(--darkerTurquoise));
  }

  a:hover {
    background-image: linear-gradient(300deg, var(--darkerBlue), var(--darkerTurquoise));
  }

  .icon,
  .email {
    height: 30px;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .email {
    font-family: var(--contentTextFontFamily);
  }


  @media screen and (max-width: 80em) {
    .contact-container {
      width: 70%;
    }
    .icon,
    .email {
      height: 40px;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 64em) {
    section {
      text-align: center;
    }
    .contact-container {
      width: 100%;
      grid: auto repeat(6, 1fr) / 1fr;
      grid-auto-flow: row;
      gap: 2em;
    }

    a {
      width: 100%;
      background-image: linear-gradient(var(--backgroundWhite),var(--backgroundWhite));
      padding: 40px 10px;
      border-radius: 10px;
      box-sizing: border-box;
    }

    .icon {
    }

    a:hover {
      background-image: linear-gradient(var(--backgroundWhite),var(--backgroundWhite));
    }

    .email {
      color: var(--charcoalBlack);
      font-family: var(--emojiFontFamily);
      font-weight: 575;
      font-size: 2.5em;
    }

    .icon, .email {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  }
  @media screen and (max-width: 48em) {
  }
  @media screen and (max-width: 40em) {
    .contact-container {
      width: 100%;
    }
  }
</style>

