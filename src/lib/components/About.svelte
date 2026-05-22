<section class="section" id="about" aria-labelledby="about-heading">
	<div class="section-header">
		<h2 class="section-title" id="about-heading">About me</h2>
	</div>
	<div class="about-grid">
		<div class="about-main">
			<p>
				At Globalli, I owned internal tools from 0 to 1. Spotted where automation could help, talked
				to the person doing the work, gathered requirements, built prototypes, and iterated based on
				stakeholder feedback until the backlog was clear and the product shipped. One of those tools
				was a purchase order system that cut processing time by 75% and handled 300+ transactions a
				month.
			</p>
			<p>
				At Tickr, the backoffice wasn't working. Fixed the frontend's calls to protected API
				endpoints with the correct auth headers, then worked through the backlog of requirements the
				previous contractor had left undone. Shipped a backoffice they could actually use to
				moderate their app.
			</p>
			<p>
				Cornell B.S., then 18 years across Korea teaching. That time built a habit of explaining
				complicated things to people who need to act on them fast. Also built tools that other
				teachers used. The first time I understood what it meant to ship something and watch people
				rely on it.
			</p>
			<p>
				Looking for TPM or PM roles in SaaS, dev tools, EdTech, or consumer apps. Based in
				Singapore. Available now.
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
