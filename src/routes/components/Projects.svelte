<script>
	import ProjectCard from './ProjectCard.svelte';
	import { realProjects } from '$lib/projects.js';
</script>

<section class="projects" id="projects">
	<h2 class="section-title">Projects</h2>
	<div class="container">
		{#each realProjects.reverse() as project, index}
			<ProjectCard {project} {index} />
		{/each}
	</div>
</section>

<style>
	section {
		/* Needs to be the same height as the nav ul element */
		scroll-margin-top: 56px;
		width: 60%;
		box-sizing: border-box;
	}

	.section-title {
		color: var(--contentText);
		font-size: var(--sectionTitleFontSize);
		font-family: var(--sectionTitleFontFamily);
		line-height: var(--sectionTitleLineHeight);
		letter-spacing: var(--sectionTitleLetterSpacing);
	}

	.container {
		width: 100%;
		height: calc(100% - 112px);
		display: grid;
		grid-template-rows: repeat(auto-fill, min-content);
		gap: 4em;
		box-sizing: border-box;
	}

	@media screen and (max-width: 80em) {
	}

	@media screen and (max-width: 64em) {
		section {
			width: 70%;
		}
		.section-title {
			text-align: center;
		}
		.container {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			grid-template-rows: repeat(auto-fill, 1fr);
			justify-content: stretch;
			gap: 2em;
		}
	}

	@media screen and (max-width: 40em) {
		section {
			width: 90%;
		}
	}
</style>
