<script>
  import ProfilePicture from './ProfilePicture.svelte';
  import AboutMeText from './AboutMeText.svelte';
</script>

<section class="about" id="aboutMe">
  <h2>About Me</h2>
  <ProfilePicture />
  <AboutMeText />
</section>

<style>
  .about {
    width: 50%;
    min-height: 100vh;
    font-size: 1.2em;
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

  }
</style>
