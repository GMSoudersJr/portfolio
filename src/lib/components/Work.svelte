<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<section class="section" id="work" aria-labelledby="work-heading">
	<div class="section-header">
		<h2 class="section-title" id="work-heading">Selected work</h2>
		<span class="section-count" aria-label="{projects.length} projects">{projects.length} projects</span>
	</div>
	<ul class="proj-grid" role="list">
		{#each projects as project (project.num)}
			<li class:last-odd={projects.indexOf(project) === projects.length - 1 && projects.length % 2 !== 0}>
				<a
					class="proj-card"
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="{project.title} — opens in new tab"
				>
					<!-- Preview image / placeholder -->
					<figure class="proj-preview" aria-hidden="true">
						{#if project.image}
							<img
								src={project.image}
								alt=""
								class="proj-preview-img"
								loading="lazy"
							/>
						{:else}
							<div class="proj-placeholder" style="background:{project.accentLight}">
								<span class="placeholder-label">Preview coming soon</span>
							</div>
						{/if}
					</figure>

					<!-- Card body -->
					<div class="proj-body">
						<div class="proj-meta">
							<p class="proj-num" aria-hidden="true">{project.num}</p>
							<span class="proj-type">{project.type}</span>
						</div>
						<div class="accent-bar" style="background:{project.accent}" aria-hidden="true"></div>
						<h3 class="proj-title">{project.title}</h3>
						<p class="proj-desc">{project.desc}</p>
						<div class="proj-footer">
							<ul class="proj-tags" role="list" aria-label="Technologies used">
								{#each project.tags as tag (tag.label)}
									<li><span class="tag {tag.cls}">{tag.label}</span></li>
								{/each}
							</ul>
							<span class="visit-cta" aria-hidden="true">Visit project ↗</span>
						</div>
					</div>
				</a>
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
	.section-count {
		font-size: 13px;
		color: var(--color-text-tertiary);
	}

	/* Grid */
	.proj-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		overflow: hidden;
		list-style: none;
	}
	li:nth-child(2n) .proj-card { border-right: none; }
	li:nth-last-child(-n+2) .proj-card { border-bottom: none; }
	li.last-odd {
		grid-column: 1 / -1;
	}
	li.last-odd .proj-card { border-right: none; }

	/* Card */
	.proj-card {
		display: flex;
		flex-direction: column;
		height: 100%;
		cursor: pointer;
		transition: background 0.15s;
		border-right: 1.5px solid var(--color-text-primary);
		border-bottom: 1.5px solid var(--color-text-primary);
		background: var(--color-background-primary);
		text-decoration: none;
		color: inherit;
	}
	.proj-card:hover { background: var(--color-background-secondary); }
	.proj-card:hover .visit-cta { color: var(--color-text-primary); }

	/* Preview */
	.proj-preview {
		height: 160px;
		overflow: hidden;
		border-bottom: 1.5px solid var(--color-text-primary);
		flex-shrink: 0;
		margin: 0;
	}
	.proj-preview-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.proj-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.placeholder-label {
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		padding: 6px 14px;
		border: 1.5px dashed var(--color-border-secondary);
		border-radius: 100px;
	}

	/* Body */
	.proj-body {
		padding: 24px 28px 28px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.proj-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}
	.proj-num {
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.1em;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	.proj-type {
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.1em;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	.accent-bar {
		height: 4px;
		width: 40px;
		border-radius: 2px;
		margin-bottom: 12px;
	}
	.proj-title {
		font-size: 17px;
		font-weight: 500;
		margin-bottom: 8px;
		letter-spacing: -0.2px;
	}
	.proj-desc {
		font-size: 13px;
		color: var(--color-text-secondary);
		line-height: 1.65;
		margin-bottom: 16px;
		flex: 1;
	}

	/* Footer row */
	.proj-footer {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.proj-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		list-style: none;
	}
	.visit-cta {
		margin-left: auto;
		font-size: 12px;
		font-weight: 500;
		color: var(--color-text-tertiary);
		white-space: nowrap;
		transition: color 0.15s;
		flex-shrink: 0;
	}

	@media (max-width: 640px) {
		.section { padding: 40px 16px; }
		.proj-grid { grid-template-columns: 1fr; }
		li:nth-child(2n) .proj-card { border-right: none; }
		li:nth-last-child(-n+2) .proj-card { border-bottom: 1.5px solid var(--color-text-primary); }
		li:last-child .proj-card { border-bottom: none; }
		li.last-odd { grid-column: unset; }
	}
</style>
