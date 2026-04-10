<script lang="ts">
	import { scrollTo } from '$lib/utils.js';
</script>

<section class="hero" aria-labelledby="hero-heading">
	<div class="hero-content">
		<p class="hero-label" aria-hidden="true">Full-stack web developer · Open to new projects</p>
		<h1 class="hero-name" id="hero-heading">
			Building things<br />that <span>actually work.</span>
		</h1>
		<p class="hero-role">React · Svelte · TypeScript · Python · MongoDB</p>
		<p class="hero-desc">
			I build web apps across the full stack — React, SvelteKit, TypeScript, Python, and MongoDB.
			Clean code, clear communication, and I finish what I start.
		</p>
		<div class="hero-cta">
			<button type="button" class="btn-fill" onclick={() => scrollTo('work')}>See my work</button>
			<button type="button" class="btn-outline" onclick={() => scrollTo('contact')}>Get in touch</button>
		</div>
	</div>

	<aside class="hero-card" aria-label="Quick stats">
		<div class="hero-avatar" aria-hidden="true">GS</div>
		<dl class="hero-stats">
			<div class="hero-stat">
				<dt class="hero-stat-label">Years shipping code</dt>
				<dd class="hero-stat-num">3+</dd>
			</div>
			<div class="hero-stat">
				<dt class="hero-stat-label">Live projects</dt>
				<dd class="hero-stat-num">6</dd>
			</div>
			<div class="hero-stat" style="margin-bottom:0">
				<dt class="hero-stat-label">Main stacks</dt>
				<dd class="hero-stat-num">2</dd>
			</div>
		</dl>
	</aside>
</section>

<style>
	.hero {
		padding: 60px 32px 56px;
		border-bottom: 2px solid var(--color-text-primary);
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 40px;
		align-items: start;
	}
	.hero-label {
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		margin-bottom: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.hero-label::before {
		content: '';
		width: 24px;
		height: 1.5px;
		background: var(--coral);
		display: inline-block;
	}
	.hero-name {
		font-size: clamp(32px, 5vw, 52px);
		font-weight: 500;
		letter-spacing: -1.5px;
		line-height: 1.05;
		margin-bottom: 8px;
	}
	.hero-name span { color: var(--coral); }
	.hero-role {
		font-size: 18px;
		color: var(--color-text-secondary);
		margin-bottom: 28px;
		line-height: 1.5;
	}
	.hero-desc {
		font-size: 15px;
		color: var(--color-text-secondary);
		line-height: 1.75;
		max-width: 480px;
		margin-bottom: 32px;
	}
	.hero-cta {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.btn-fill {
		font-size: 13px;
		font-weight: 500;
		padding: 10px 22px;
		background: var(--color-text-primary);
		color: var(--color-background-primary);
		border: 1.5px solid var(--color-text-primary);
		border-radius: 100px;
		cursor: pointer;
		transition: opacity 0.15s;
		font-family: inherit;
	}
	.btn-fill:hover { opacity: 0.8; }
	.btn-outline {
		font-size: 13px;
		font-weight: 500;
		padding: 10px 22px;
		background: transparent;
		color: var(--color-text-primary);
		border: 1.5px solid var(--color-text-primary);
		border-radius: 100px;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
		font-family: inherit;
	}
	.btn-outline:hover {
		background: var(--color-text-primary);
		color: var(--color-background-primary);
	}
	.hero-card {
		background: var(--coral-light);
		border: 1.5px solid var(--coral-border);
		border-radius: 16px;
		padding: 24px;
		min-width: 200px;
	}
	.hero-avatar {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		background: var(--coral);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 16px;
		border: 2px solid var(--color-text-primary);
		user-select: none;
	}
	.hero-stats { display: flex; flex-direction: column; gap: 0; }
	.hero-stat { margin-bottom: 12px; }
	.hero-stat-num {
		font-size: 28px;
		font-weight: 500;
		letter-spacing: -1px;
		color: var(--coral-stat-num);
	}
	.hero-stat-label {
		font-size: 11px;
		color: var(--coral-stat-label);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	@media (max-width: 640px) {
		.hero {
			grid-template-columns: 1fr;
			padding: 40px 16px;
			gap: 32px;
		}
		.hero-role { font-size: 15px; }
		.hero-card { min-width: unset; }
	}
</style>
