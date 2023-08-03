<script>
  import ProjectCard from './ProjectCard.svelte';
  const projects = [
    {
      name: "Tribute Page for Dr. Mae Carol Jemison",
      imgUrl:"https://lh3.googleusercontent.com/pw/AIL4fc81BhVad9-RedoeUSUpnel3r0KnZ-SReHUFCXK8jSQmFN7VkNBXEryQz2vUpO4eZ69cOSZ7EMqqhCmXfotsw4l17pcEFdL-0DJavyWccMRVtDqaMZYkbUYk05wfejC6QZe9sxoLaUQgZa-zbI4UEDv-EA=w1798-h944-s-no?authuser=0",
      alt: "A tribute to Dr. Mae Jemison",
      description: "A responsive page that was built for freeCodeCamp certification.",
      stack: "HTML | CSS",
    },
    {
      name: "Global Surface Temperatures",
      imgUrl: "https://lh3.googleusercontent.com/pw/AIL4fc8Ge_Mr_pl6GAXzeIb9SF03KNF9FM_T6uXo7bda6FLBxVQghyOrNNVbbqAjvwNbnY500gFUKlD3NFkeFRbHgQP2GHnbkohLUMijdHoQdTw5q1yMEBFF3yJ-B4fKAU8daj5nHC-hatVClT4pYOKV4LAteA=w1900-h777-s-no?authuser=0",
      alt: "Global Surface Temperatures",
      description: "Data visualization of global surface temperatures for freeCodeCamp data visualization certification",
      stack: "D3.js | CSS",
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
    align-items: center;
    row-gap: 3rem;
  }

  h2 {
    color: var(--contentText);
    font-size: var(--sectionTitleFontSize);
  }

  section {
    /* Needs to be the same height as the nav ul element */
    scroll-margin-top: 56px;
    min-height: 100vh;
  }

  @media screen and (max-width: 80em) {
    h2 {
      text-align: center
    }
  }
  @media screen and (max-width: 64em) {
    section {
      width:90%;
    }
  }
</style>
