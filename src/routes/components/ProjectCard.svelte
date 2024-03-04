<script lang="ts">
  export let project;
  export let index;

</script>

<div class="project-card">
  <div class="image-container">
    <a
      href={`${project.projectUrl}`}
      referrerpolicy="no-referrer"
      target="_blank"
    >
      <img src={`${project.imageUrl}`} alt={`${project.name}`} class="image">
    </a>
  </div>
  <div class="info">
    <div class="project-info" id="project-name">
      <a
        href={`${project.projectUrl}`}
        referrerpolicy="no-referrer"
        target="_blank"
      >
        <h1 class="poppins-black">
          {project.name}
        </h1>
      </a>
    </div>
    <div class="project-info" id="project-description">
      {#each project.description as description}
        <p class="project-description-item lora-text">{@html description}</p>
      {/each}
    </div>
    <div class="project-info lora-text" id="project-stack">
      <h3 class="poppins-medium">
        {project.stack}
      </h3>
      <a
        href={project.githubUrl}
        referrerpolicy="no-referrer"
        target="_blank"
      >
        <img
          src=
          {`https://img.shields.io/badge/-GitHub Repo-FFFFFF?logo=GitHub&logoColor=181717&style=for-the-badge`}
          alt="github repo"
          class="github-badge"
        >
      </a>
    </div>
  </div>
</div>

<style>
  .github-badge {
    border-radius: 4px;
    opacity: 0.8;
  }
  p, h1 {
    text-wrap: pretty;
  }
  a {
    text-decoration: none;
  }
  .project-card {
    width: 100%;
    height: 150px;
    background-color: #259;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    overflow: hidden;
  }
  .image-container {
    height: 100%;
    width: 30%;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
  }
  .image {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
  .info {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr;
    place-self: center;
    justify-self: center;
    justify-items: center;
    row-gap: 0.5rem;
  }
  #project-description {
    display: grid;
    justify-items: center;
  }
  #project-stack {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0.5rem;
  }
  .project-card:nth-child(even) {
    flex-direction: row-reverse;
    & .image-container {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    }
  }

  @media screen and (max-width: 64em) {
    .project-card {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      height: 70vh;
      width: 100%;
      justify-items: center;
    }
    .image-container {
      width: 100%;
      height: 100%;
      border-radius: 0;
      clip-path: none;
    }
    .info {
      width: 90%;
      height: 100%;
      justify-items: center;
      text-align: center;
      align-content: center;
      row-gap: 1rem;
    }
    .project-card:nth-child(even) {
      flex-direction: column;
    }
    .project-card:nth-child(even) > .image-container {
      border-radius: 0;
      clip-path: none;
    }
  }

</style>
