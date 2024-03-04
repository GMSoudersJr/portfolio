<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';
  import { realProjects } from '$lib/projects.js';
</script>

<section class="projects-container" id="projects">
  <h1 class="section-title poppins-extrabold">
    <span class="gradient-text">
      Projects
    </span>
  </h1>
  <div class="project-cards-container">
    {#each realProjects as project, index }
      <ProjectCard {project} {index}/>
    {/each}
  </div>
</section>

<style>
  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    justify-content: center;
    row-gap: 1rem;
    padding-left: 6vw;
    padding-right: 6vw;
  }
  .project-cards-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    gap: 4em;
  }

  .section-title {
    font-size: var(--sectionTitleFontSize);
    letter-spacing: var(--sectionTitleLetterSpacing);
    line-height: var(--sectionTitleLineHeight);
  }

  @media screen and (max-width: 80em) {
  }

  @media screen and (max-width: 64em) {
    .project-cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 40em) {
    .project-cards-container {
      grid-template-columns: 1fr;
    }
    .section-title {
      text-align: center;
    }
  }
</style>
