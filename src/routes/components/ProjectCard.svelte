<script>
  export let project;
  export let index;
  let projectCardClassName = "project-card-container"

  if ((Number.parseInt(index) + 1) % 2 === 0) {
    projectCardClassName += " reverse"
  }
</script>

<div class={projectCardClassName}>
  <a
    class="project-link"
    href={project.projectUrl}
    target="_blank"
    referrerpolicy="no-referrer"
  >
    <img
      class="project-image"
      src={project.imageUrl}
      alt={project.alt}
    />
  </a> 
  <div class="details-area">
    <h1 class="project-name">{project.name}</h1>
    {#each project.description as description}
    <p class="project-description">{description}</p>
    {/each}
    <div class="stack-git">
      <h3 class="project-stack">{project.stack}</h3>
      <a
        href={project.githubUrl}
        id={`${project.id}-GitHub`}
        referrerpolicy="no-referrer"
        target="_blank"
      >
        <img
          class="github-icon"
          src="https://lh3.googleusercontent.com/pw/AIL4fc8YKL8pEKc5WSoPX9onJhSk5j-4-68MBln6PsoDcrr2lGBSxaiidZLp0T-ufKICz9hQP9ZE3bssftK3J30AWFZtBEaEhLMC0NafOMeeOdpgD8A_qrw9NicNsqLZieXz4K_XYs7MN8p29LLB-_0Z92s4eg=w230-h225-s-no?authuser=0"
          alt="GitHub Icon">
      </a>
    </div>
  </div>
</div>

<style>
  .stack-git {
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: min-content;
    justify-content: center;
    align-items: center;
    column-gap: 1em;
  }
  .github-icon {
    height: 20px;
    widows: 20px;
  }
  .project-card-container {
    width: 100%;
    aspect-ratio: 16 / 4;
    display: grid;
    /* this is good for overlapping look
    grid: 1fr / 2fr 4fr;
     */
    grid: 1fr / 2fr 5fr;
    background: linear-gradient(80deg, var(--projectImageBackground) 30%,
    var(--projectDetailsBackground) 30.1%);
    border-radius: 12px;
    box-sizing: border-box;
  }

  .project-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
    box-sizing: border-box;
    /* git rid of padding to have them overlap */
    padding: 12px;
    align-self: center;
    justify-self: center;
  }

  .project-link {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  .details-area {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(3, min-content);
    align-items: center;
    text-align: center;
    justify-self: center;
    align-self: center;
    justify-content: center;
  }

  .reverse {
    /* uncomment to have overlap
    grid: auto / 4fr 2fr;
     */
    grid: auto / 5fr 2fr;
    background: linear-gradient(-80deg, var(--projectImageBackground) 30%,
    var(--projectDetailsBackground) 30.1%);
  }

  .reverse .project-link {
    grid-row: 1;
    grid-column: 2;
  }

  .project-name, .project-stack {
    font-family: var(--projectNameAndStackFontFamily);
    letter-spacing: var(--projectNameAndStackLetterSpacing);
  }

  .project-description {
    font-family: var(--projectDescriptionFontFamily);
    line-height: 20px;
    max-width: 600px;
  }

  @media screen and (max-width: 64em) {
    .project-card-container {
      width: 100%;
      grid: repeat(2, 1fr) / 1fr;
      background: var(--baseGallery);
    }
    .reverse .project-link {
      grid-row: 1;
      grid-column: 1;
    }

    .project-image {
      width: 100%;
      padding: 5px;
      border: none;
      border-radius: 13px;
      object-fit: cover;
      box-sizing: border-box;
    }
  }

</style>
