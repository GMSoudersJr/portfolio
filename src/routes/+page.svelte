<script>
  import ProfilePicture from './components/ProfilePicture.svelte';
  import FindMe from './components/FindMe.svelte';
  import Splash from './components/Splash.svelte';
  import AboutMeText from './components/AboutMeText.svelte';
  import Projects from './components/Projects.svelte';

</script>

<div class="container">
  <Splash />
  <section class="about" id="aboutMe">
    <h2>About Me</h2>
    <ProfilePicture />
    <AboutMeText />
  </section>
  <section class="projects" id="projects">
    <h2>Projects</h2>
    <Projects />
  </section>
  <FindMe />
  <br>
</div>

<style>
  * {
    color: #E5E5CB
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
  }

  .about {
    width: 50%;
    height: 100vh;
    font-size: 1.2em;
  }

  section {
    /* Needs to be the same height as the nav ul element */
    scroll-margin-top: 56px;
  }
</style>
