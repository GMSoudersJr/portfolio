<script>
  export let project;
  export let index;
  let projectCardClassName = "project-card-container"

  if ((Number.parseInt(index) + 1) % 2 === 0) {
    projectCardClassName += " reverse"
  }
</script>

<div class={projectCardClassName}>
  <img
    class="project-image"
    src={project.imageUrl}
    alt={project.alt}
  />
  <div class="details-area">
    <h1 class="project-name">{project.name}</h1>
    <p class="project-description">{project.description}</p>
    <h3 class="project-stack">{project.stack}</h3>
  </div>
</div>

<style>
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
    border-radius: 5px;
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

  .details-area {
    width: 100%;
    display: grid;
    grid: repeat(3, 1fr) / auto;
    align-items: center;
    text-align: center;
    justify-self: center;
    align-self: stretch;
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

  .reverse .project-image {
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
    .reverse .project-image {
      grid-row: 1;
      grid-column: 1;
    }

    .project-image {
      width: 100%;
      padding: 5px;
      border: none;
      border-radius: 0;
      object-fit: cover;
      box-sizing: border-box;
    }
  }

</style>
