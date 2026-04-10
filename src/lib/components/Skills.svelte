<script lang="ts">
	const skills = [
		{ name: 'React / Next.js', type: 'Frontend', color: 'var(--purple)' },
		{ name: 'Svelte / SvelteKit', type: 'Frontend', color: 'var(--coral)' },
		{ name: 'TypeScript', type: 'Language', color: '#378add' },
		{ name: 'Python', type: 'Language', color: 'var(--teal)' },
		{ name: 'Django', type: 'Backend', color: 'var(--amber)' },
		{ name: 'MongoDB', type: 'Database', color: '#1d9e75' },
		{ name: 'Linux / Bash', type: 'Tooling', color: 'var(--color-text-secondary)' },
		{ name: 'Vim / Tmux', type: 'Tooling', color: 'var(--color-text-secondary)' }
	];
</script>

<section class="section" aria-labelledby="skills-heading">
	<div class="section-header">
		<h2 class="section-title" id="skills-heading">Skills &amp; tools</h2>
	</div>
	<ul class="skills-grid" role="list">
		{#each skills as skill (skill.name)}
			<li class="skill-block">
				<span class="skill-dot" style="background:{skill.color}" aria-hidden="true"></span>
				<span class="skill-name">{skill.name}</span>
				<span class="skill-type">{skill.type}</span>
			</li>
		{/each}
	</ul>
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
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		overflow: hidden;
		list-style: none;
	}
	.skill-block {
		padding: 20px;
		border-right: 1.5px solid var(--color-text-primary);
		border-bottom: 1.5px solid var(--color-text-primary);
		display: flex;
		flex-direction: column;
	}
	.skill-block:nth-child(4n) { border-right: none; }
	.skill-block:nth-child(n+5) { border-bottom: none; }
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
		.skills-grid { grid-template-columns: repeat(2, 1fr); }
		/* reset 4-col border rules */
		.skill-block:nth-child(4n) { border-right: 1.5px solid var(--color-text-primary); }
		.skill-block:nth-child(n+5) { border-bottom: 1.5px solid var(--color-text-primary); }
		/* apply 2-col rules */
		.skill-block:nth-child(2n) { border-right: none; }
		.skill-block:nth-child(n+7) { border-bottom: none; }
	}
</style>
