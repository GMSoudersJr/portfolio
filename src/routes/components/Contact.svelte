<script>
  import { socialDetails } from '$lib/socials.js';

  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<section class="contact-container" id="contact">
  <h1 class="section-title poppins-extrabold">
    <span class="gradient-text">
      Contact
    </span>
  </h1>
  <div class="social-icons-container">
  {#each socialDetails as social (social.id)}
    <a
      href={social.href}
      target="_blank"
      referrerpolicy="no-referrer"
      id={social.id}
      class={social.class}
      title={social.title}
    >
      <img
        id={`${social.id}-icon`}
        class="icon"
        src={`https://img.shields.io/badge/-${social.id}-${social.hexColor}?logo=${social.id}&logoColor=FFFFFF`}
        alt={social.alt}
      />
    </a>
  {/each}
  </div>
</section>


<style>
  .contact-container {
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1rem;
    align-items: center;
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .social-icons-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
  }

  .section-title {
    font-size: var(--sectionTitleFontSize);
    line-height: var(--sectionTitleLineHeight);
    letter-spacing: var(--sectionTitleLetterSpacing);
  }

  img {
    height: 40px;
  }

  @media screen and (max-width: 80em) {
  }

  @media screen and (max-width: 64em) {
  }

  @media screen and (max-width: 48em) {
  }

  @media screen and (max-width: 40em) {
    .social-icons-container {
      justify-content: center;
    }
    .section-title {
      text-align: center;
    }
  }
</style>

