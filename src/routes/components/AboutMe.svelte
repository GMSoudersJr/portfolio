<script>
  import ProfilePicture from './ProfilePicture.svelte';
  import AboutMeText from './AboutMeText.svelte';
</script>

<section class="about" id="aboutMe">
  <h1 class="section-title">
    About Me
  </h1>
  <div class="about-me-content">
    <ProfilePicture />
    <AboutMeText />
  </div>
</section>

<style>
  .about {
    max-width: calc(600px + 14em + 3em);
    min-height: 100vh;
    font-size: 1.2em;
  }
  .about-me-content {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3em;
  }
  .section-title {
    color: var(--contentText);
    font-size: var(--sectionTitleFontSize);
    font-family: var(--sectionTitleFontFamily);
    line-height: var(--sectionTitleLineHeight);
    letter-spacing: var(--sectionTitleLetterSpacing);
  }
  section {
    /* Needs to be the same height as the nav ul element */
    scroll-margin-top: 56px;
    min-height: 100vh;
  }
  @media screen and (max-width: 80em) {
    .section-title {
      text-align: center
    }
    .about {
      width: 70%;
    }
    .about-me-content {
      flex-direction: column;
      align-items: center;
      gap: 1.5em;
    }

  }
  @media screen and (max-width: 40em) {
    .about {
      width: 95%;
    }
  }
</style>
