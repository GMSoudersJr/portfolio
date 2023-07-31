<script>
  import ProfilePicture from './ProfilePicture.svelte';
  import AboutMeText from './AboutMeText.svelte';
</script>

<section class="about" id="aboutMe">
  <h2>About Me</h2>
  <div class="about-me-content">
    <ProfilePicture />
    <AboutMeText />
  </div>
</section>

<style>
  .about {
    width: 70%;
    min-height: 100vh;
    font-size: 1.2em;
  }
  .about-me-content {
    display: flex;
    flex-direction:reverse;
    gap: 1em;
  }
  h2 {
    color: var(--contentText);
    font-size: var(--sectionTitleFontSize);
  }
  section {
    /* Needs to be the same height as the nav ul element */
    scroll-margin-top: 56px;
  }
  @media screen and (max-width: 1200px) {
    h2 {
      text-align: center
    }
    .about {
      width: 70%;
    }
    .about-me-content {
      flex-direction: column
    }

  }
</style>
