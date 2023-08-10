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
    height: calc(100% - 112px);
    display: grid;
    grid: repeat(5, 1fr) / 1fr;
    gap: 4em;
    box-sizing: border-box;
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
    section {
      width:90%;
      height: 300vh;
      overflow: hidden;
    }

    .container {
      grid-template-columns: 1fr;
    }
  }
</style>
