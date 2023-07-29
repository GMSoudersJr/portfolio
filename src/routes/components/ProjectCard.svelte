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
    src={project.img}
    alt={project.alt}
  />
  <div class="details-area">
    <h1 id="project-name">{project.name}</h1>
    <p>{project.description}</p>
    <h3>Stack:</h3>
  </div>
</div>

<style>
  .project-card-container {
    width: 70vw;
    aspect-ratio: 16 / 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(80deg, var(--light) 30%, var(--dark) 30.1%);
    border-radius: 5px;
  }

  .reverse {
    flex-direction: row-reverse;
    background: linear-gradient(-80deg, var(--light) 30%, var(--dark) 30.1%);
  }

  .details-area {
    width: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
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

</style>
