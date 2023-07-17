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

<div class="container">
  {#each projects as project, index }
    <ProjectCard {project} {index}/>
  {/each}

</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
  }

</style>
