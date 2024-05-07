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
    <h1 class="project-name">
      <a
        href={project.projectUrl}
        target="_blank"
        referrerpolicy="no-referrer"
      >
      {project.name}
      </a>
    </h1>
    {#each project.description as description}
    <p class="project-description">{description}</p>
    {/each}
    <div class="stack-git">
      <ul class="stack-list">
      {#each project.stack as stack}
        <li class="stack-listitem">
          {stack}
        </li>
      {/each}
      </ul>
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
  .project-card-container {
    display: grid;
    grid: 1fr / 2fr 5fr;
    background: linear-gradient(80deg, var(--projectImageBackground) 30%,
    var(--projectDetailsBackground) 30.1%);
    border-radius: 12px;
    box-sizing: border-box;
  }

  .stack-git {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: min-content;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }

  .github-icon {
    height: 20px;
    widows: 20px;
  }

  .stack-list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    column-gap: 0.5rem;
    padding-left: 0;
  }

  .stack-listitem {
    list-style: none;
    font-family: var(--projectNameAndStackFontFamily);
    letter-spacing: var(--projectNameAndStackLetterSpacing);
    font-weight: 700;
    max-width: 600px;
  }

  .project-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
    box-sizing: border-box;
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
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    align-items: center;
    text-align: center;
    justify-self: center;
    align-self: center;
    justify-content: center;
  }

  .reverse {
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
  .project-name a {
    text-decoration: none;
    color: inherit;
  }

  .project-description {
    font-family: var(--projectDescriptionFontFamily);
    line-height: 20px;
    max-width: 600px;
  }

  @media screen and (max-width: 64em) {
    .project-card-container {
      height: fit-content;
      grid:  1fr max-content / 1fr;
      justify-content: center;
      background: var(--baseGallery);
    }
    .reverse .project-link {
      grid-row: 1;
      grid-column: 1;
    }
    .details-area {
      height: 100%;
      width: 95%;
      align-items: center;
      grid-template-columns: 90%;
      grid-template-rows: repeat(auto-fill, min-content);
    }

    .stack-git {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, min-content);
      justify-content: center;
      align-items: center;
      column-gap: 0.5rem;
      padding-bottom: 1.5rem;
    }

    .stack-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 1rem;
      padding-left: 0;
    }

    .project-image {
      align-self: center;
      width: 100%;
      aspect-ratio: 1 / 1;
      border: none;
      border-radius: 13px;
      object-fit: cover;
      box-sizing: border-box;
    }
  }

</style>
