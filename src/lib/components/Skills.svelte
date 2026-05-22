<script lang="ts">
	const productSkills = [
		{ name: 'Requirements gathering', type: 'Discovery', color: 'var(--coral)' },
		{ name: 'Agile / Scrum', type: 'Process', color: 'var(--purple)' },
		{ name: 'Stakeholder management', type: 'Process', color: 'var(--teal)' },
		{ name: 'Product roadmapping', type: 'Strategy', color: 'var(--amber)' }
	];

	const technicalSkills = [
		{ name: 'React / Next.js', type: 'Frontend', color: 'var(--purple)' },
		{ name: 'Svelte / SvelteKit', type: 'Frontend', color: 'var(--coral)' },
		{ name: 'TypeScript', type: 'Language', color: '#378add' },
		{ name: 'Python / Django', type: 'Language', color: 'var(--teal)' },
		{ name: 'MongoDB', type: 'Database', color: '#1d9e75' },
		{ name: 'D3.js', type: 'Visualisation', color: 'var(--amber)' },
		{ name: 'Playwright', type: 'Testing', color: 'var(--color-text-secondary)' },
		{ name: 'Jira / Confluence', type: 'Tooling', color: 'var(--color-text-secondary)' }
	];
</script>

<section class="section" aria-labelledby="skills-heading">
	<div class="section-header">
		<h2 class="section-title" id="skills-heading">Skills</h2>
	</div>
	<div class="skills-columns">
		<div class="skills-group">
			<h3 class="group-label">Product</h3>
			<ul class="skills-list" role="list">
				{#each productSkills as skill (skill.name)}
					<li class="skill-block">
						<span class="skill-dot" style="background:{skill.color}" aria-hidden="true"></span>
						<span class="skill-name">{skill.name}</span>
						<span class="skill-type">{skill.type}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="skills-group">
			<h3 class="group-label">Technical</h3>
			<ul class="skills-list" role="list">
				{#each technicalSkills as skill (skill.name)}
					<li class="skill-block">
						<span class="skill-dot" style="background:{skill.color}" aria-hidden="true"></span>
						<span class="skill-name">{skill.name}</span>
						<span class="skill-type">{skill.type}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 52px 32px;
		border-bottom: 2px solid var(--color-text-primary);
	}
	.section-header {
		display: flex;
		align-items: baseline;
		gap: 16px;
		margin-bottom: 36px;
	}
	.section-title {
		font-size: 26px;
		font-weight: 500;
		letter-spacing: -0.5px;
	}
	.skills-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		overflow: hidden;
	}
	.skills-group {
		display: flex;
		flex-direction: column;
	}
	.skills-group:first-child {
		border-right: 1.5px solid var(--color-text-primary);
	}
	.group-label {
		padding: 12px 20px;
		border-bottom: 1.5px solid var(--color-text-primary);
		font-size: 11px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-secondary);
	}
	.skills-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		list-style: none;
	}
	.skill-block {
		padding: 20px;
		border-bottom: 1.5px solid var(--color-text-primary);
		display: flex;
		flex-direction: column;
	}
	.skill-block:last-child {
		border-bottom: none;
		flex: 1;
	}
	.skill-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-bottom: 12px;
		flex-shrink: 0;
	}
	.skill-name {
		font-size: 13px;
		font-weight: 500;
		margin-bottom: 3px;
	}
	.skill-type {
		font-size: 11px;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	@media (max-width: 640px) {
		.section { padding: 40px 16px; }
		.skills-columns { grid-template-columns: 1fr; }
		.skills-group:first-child {
			border-right: none;
			border-bottom: 1.5px solid var(--color-text-primary);
		}
	}
</style>
