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
    width: 70vw;
    aspect-ratio: 16 / 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(80deg, var(--backgroundWhite) 30%,
    var(--baseGallery) 30.1%);
    border-radius: 5px;
  }

  .reverse {
    flex-direction: row-reverse;
    background: linear-gradient(-80deg, var(--backgroundWhite) 30%,
    var(--baseGallery) 30.1%);
  }

  .details-area {
    width: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 1em;
    text-align: center;
  }

  .project-image {
    flex: 1;
    width: 10%;
    aspect-ratio: 1/1;
    border: 1px solid var(--dark);
    border-radius: 50%;
    object-fit: cover;
    margin: 2%;
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
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      background: var(--baseGallery);
    }
    .project-image {
      aspect-ratio: 0;;
      width: 99%;
      border: none;
      border-radius: 0;
      object-fit: contain;
      margin: 0.3em;
    }
    .details-area {
      width: 90%;
      align-items: center;
    }

  }

</style>
