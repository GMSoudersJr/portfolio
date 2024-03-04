<script>
  import ProfilePicture from './ProfilePicture.svelte';
  import AboutMeText from './AboutMeText.svelte';
</script>

<section class="about-container" id="aboutMe">
  <h1 class="section-title poppins-extrabold">
    <span class="gradient-text">
      About Me
    </span>
  </h1>
  <div class="about-content">
    <ProfilePicture />
    <AboutMeText />
  </div>
</section>

<style>
  .about-container {
    font-size: 1.2em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content) ;
    justify-content: center;
    row-gap: 2rem;
    padding-left: 6vw;
    padding-right: 6vw;
  }
  .about-content {
    display: grid;
    grid-template-columns: min-content 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 3rem;
  }
  .section-title {
    font-size: var(--sectionTitleFontSize);
    line-height: var(--sectionTitleLineHeight);
    letter-spacing: var(--sectionTitleLetterSpacing);
  }
  @media screen and (max-width: 80em) {

  }

  @media screen and (max-width: 64em) {
    .about-content {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 40em) {
    .section-title {
      text-align: center;
    }
  }
</style>
