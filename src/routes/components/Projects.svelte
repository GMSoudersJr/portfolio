<script>
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '$lib/projects.js';
</script>

<section class="projects" id="projects">
  <h2 class="section-title">
    Projects
  </h2>
  <div class="container">
    {#each projects as project, index }
      <ProjectCard {project} {index}/>
    {/each}
  </div>
</section>

<style>
  section {
    /* Needs to be the same height as the nav ul element */
    scroll-margin-top: 56px;
    width: 60%;
    height: 100vh;
    overflow: hidden;
  }

  .section-title {
    color: var(--contentText);
    font-size: var(--sectionTitleFontSize);
    font-family: var(--sectionTitleFontFamily);
    line-height: var(--sectionTitleLineHeight);
    letter-spacing: var(--sectionTitleLetterSpacing);
  }

  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid: repeat(5, 1fr) / 1fr;
    gap: 4em;
    overflow: hidden;
  }

  @media screen and (max-width: 80em) {
  }

  @media screen and (max-width: 64em) {
    section {
      width: 70%;
    }
    .section-title {
      text-align: center
    }
    .container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      justify-content: stretch;
      gap: 2em;
    }
  }
  @media screen and (max-width: 40em) {
    .container {
      grid-template-columns: 1fr;
    }
    section {
      width:90%;
    }
  }
</style>
