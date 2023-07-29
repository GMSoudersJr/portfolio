<script>
  import linkedInIcon from '/src/In-White-96.png';
  import githubIcon from '/src/github-mark-white.png';
  import glitchIcon from '/src/GlitchIcon_Solid_Black.png';
  import codepenIcon from '/src/codepen-wordmark-white.png';

  import linkedInIconLong from '/src/LinkedIn-Blue-96@2x.png';
  import githubIconLong from '/src/GitHub_Logo.png';
  import glitchIconLong from '/src/GlitchLogo_Color_Wordmark.png';
  import codepenIconLong from '/src/codepen-wordmark-black.png';
  const socialDetails = [
    {
      id: "linkedIn",
      href: "https://www.linkedin.com/in/gerald-souders/",
      class: "icon icon-square",
      icon: linkedInIcon,
      iconLong: linkedInIconLong,
      alt: "LinkedIn Icon",
      text: ""
    },
    {
      id: "github",
      href: "https://github.com/GMSoudersJr",
      class: "icon icon-square",
      icon: githubIcon,
      iconLong: githubIconLong,
      alt: "GitHub Icon",
      text: ""
    },
    {
      id: "codepen",
      href: "https://codepen.io/GMSoudersJr",
      class: "icon icon-long",
      icon: codepenIcon,
      iconLong: codepenIconLong,
      alt: "CODEPEN Icon",
      text: ""
    },
    {
      id: "email",
      href: "mailto: gmsoudersjr@gmail.com",
      class: "email",
      icon: "",
      alt: "",
      text: "@",
      textLong: "E-MAIL"
    },
    {
      id: "glitch",
      href: "https://glitch.com/@GMSoudersJr",
      class: "icon icon-square",
      icon: glitchIcon,
      iconLong: glitchIconLong,
      alt: "Glitch Icon",
      text: ""
    },
  ];

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
    justify-content: end;
    align-items: center;
  }

  .icon-square {
    aspect-ratio: 1/1;
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
      background-color: #F1F1F1;
      padding: 20px 10px;
      border-radius: 10px;
      width: 100%;
    }
    .email {
      color: black;
      font-family: helvetica;
      font-size: 2.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
