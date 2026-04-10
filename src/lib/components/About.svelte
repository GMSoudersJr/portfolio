<section class="section" id="about" aria-labelledby="about-heading">
	<div class="section-header">
		<h2 class="section-title" id="about-heading">About me</h2>
	</div>
	<div class="about-grid">
		<div class="about-main">
			<p>
				I'm a web app developer who spent nearly 20 years teaching in Busan and Seoul. That career
				built habits that transfer directly to software: explaining things clearly, keeping the end
				user in focus, and never stopping learning. The moment I realized I could make a webpage do
				something useful, I was hooked. I've been building ever since.
			</p>
			<p>
				I work across the stack: React, Next.js, Svelte, JavaScript, TypeScript, Python, and MongoDB. I've
				built and shipped production apps used by real people, contributed to a React codebase
				overhaul at a startup, and built tools I rely on myself every day. I finish what I start,
				iterate based on feedback, and take pride in work that actually holds up.
			</p>
			<p>
				I'm a constant learner who picks up new things fast and takes direction well. I enjoy being
				part of a team that holds the bar high, and I bring that same standard to everything I
				ship.
			</p>
		</div>
		<aside class="about-side" aria-label="Background highlights">
			<dl class="about-stats">
				<div class="about-stat-item">
					<dd class="about-stat-big" style="color:var(--coral)">Cornell</dd>
					<dt class="about-stat-desc">B.S. Nutritional Sciences. Analytical foundation, practical mindset.</dt>
				</div>
				<div class="about-stat-item">
					<dd class="about-stat-big" style="color:var(--purple)">~20 yrs</dd>
					<dt class="about-stat-desc">Living and working in Busan &amp; Seoul.</dt>
				</div>
				<div class="about-stat-item">
					<dd class="about-stat-big" style="color:var(--teal)">#1</dd>
					<dt class="about-stat-desc">Google Search, Armstrong Pull-up Program App. Zero marketing.</dt>
				</div>
			</dl>
		</aside>
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
	.about-grid {
		display: grid;
		grid-template-columns: 3fr 2fr;
		gap: 0;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		overflow: hidden;
	}
	.about-main {
		padding: 32px;
		border-right: 1.5px solid var(--color-text-primary);
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.about-main p {
		font-size: 15px;
		line-height: 1.8;
		color: var(--color-text-secondary);
	}
	.about-side { padding: 32px; }
	.about-stats { display: flex; flex-direction: column; }
	.about-stat-item {
		padding: 20px 0;
		border-bottom: 1.5px solid var(--color-border-tertiary);
	}
	.about-stat-item:first-child { padding-top: 0; }
	.about-stat-item:last-child { border-bottom: none; padding-bottom: 0; }
	.about-stat-big {
		font-size: 36px;
		font-weight: 500;
		letter-spacing: -1px;
		line-height: 1;
	}
	.about-stat-desc {
		font-size: 12px;
		color: var(--color-text-secondary);
		margin-top: 4px;
		line-height: 1.5;
	}

	@media (max-width: 640px) {
		.section { padding: 40px 16px; }
		.about-grid { grid-template-columns: 1fr; }
		.about-main {
			border-right: none;
			border-bottom: 1.5px solid var(--color-text-primary);
		}
	}
</style>
