<script>
  import ProjectCard from './ProjectCard.svelte';
  import AmericanMap from '/src/American Map.jpg';
  const projects = [
    {
      name: "Educational Attainment in USA",
      img: AmericanMap,
      alt: "Map of educational attainment in USA",
      description: "Talk some shit about the project",
      stack: "probably be another object",
    },
    {
      name: "Educational Attainment in USA 2",
      img: AmericanMap,
      alt: "Map of educational attainment in USA",
      description: "Talk some shit about the project",
      stack: "probably be another object",
    },
  ]
</script>

<section class="projects" id="projects">
  <h2>Projects</h2>
  <div class="container">
    {#each projects as project, index }
      <ProjectCard {project} {index}/>
    {/each}
  </div>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
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
  }
</style>
