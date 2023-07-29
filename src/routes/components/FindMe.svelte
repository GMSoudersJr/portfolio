<script>
  import linkedInIcon from '/src/In-White-96.png';
  import githubIcon from '/src/github-mark-white.png';
  import glitchIcon from '/src/GlitchIcon_Solid_Black.png';
  import codepenIcon from '/src/codepen-wordmark-white.png';

  const socialDetails = [
    {
      id: "linkedIn",
      href: "https://www.linkedin.com/in/gerald-souders/",
      class: "icon icon-square",
      icon: linkedInIcon,
      alt: "LinkedIn Icon",
      text: ""
    },
    {
      id: "github",
      href: "https://github.com/GMSoudersJr",
      class: "icon icon-square",
      icon: githubIcon,
      alt: "GitHub Icon",
      text: ""
    },
    {
      id: "codepen",
      href: "https://codepen.io/GMSoudersJr",
      class: "icon icon-long",
      icon: codepenIcon,
      alt: "CODEPEN Icon",
      text: ""
    },
    {
      id: "email",
      href: "mailto: gmsoudersjr@gmail.com",
      class: "email",
      icon: "",
      alt: "",
      text: "@"
    },
    {
      id: "glitch",
      href: "https://glitch.com/@GMSoudersJr",
      class: "icon icon-square",
      icon: glitchIcon,
      alt: "Glitch Icon",
      text: ""
    },
  ]
</script>

<section class="findMe" id="findMe">
  {#each socialDetails as social (social.id)}
  <div id={social.id} class={social.class}>
    <a
      href={social.href}
      target="_blank"
      referrerpolicy="no-referrer"
    >
    {#if social.id === "email"}
      {social.text}
    {:else}
      <img
        id={`${social.id}-icon`}
        class="icon"
        src={social.icon}
        alt={social.alt}
      />
    {/if}
    </a>
  </div>
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
      flex-direction: column;
      justify-content: center;
      row-gap: 2em;
    }
  }
</style>
