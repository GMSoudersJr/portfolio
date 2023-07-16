<script>
  export let project;
  export let index;
  let projectCardClassName = "project-card-container"
  if ((Number.parseInt(index) + 1) % 2 === 0) {
    projectCardClassName += " reverse"
  }
</script>
<div class={projectCardClassName}>
  <div class="image-area">
    <img
      class="project-image"
      src={project.img}
      alt={project.alt}
    />
  </div>
  <div class="details-area">
    <h1 id="project-name">{project.name}{Number.parseInt(index) + 1}</h1>
    <p>{project.description}</p>
    <h3>Stack:</h3>
  </div>
</div>

<style>
  .project-card-container {
    width: 70vw;
    height: 40vh;
    display: flex;
    flex-direction: row;
    background: linear-gradient(80deg, var(--light) 30%, var(--dark) 30.1%);
    border-radius: 5px;
  }
  
  .reverse {
    flex-direction: row-reverse;
    background: linear-gradient(-80deg, var(--light) 30%, var(--dark) 30.1%);
  }

  .image-area {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .details-area {
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-image {
    height: 80%;
    aspect-ratio: 1/1;
    border: 1px solid var(--dark);
    border-radius: 50%;
    object-fit: cover;
  }

</style>
