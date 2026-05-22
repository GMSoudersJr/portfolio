<section class="section" id="contact" aria-labelledby="contact-heading">
	<div class="section-header">
		<h2 class="section-title" id="contact-heading">Let's connect</h2>
	</div>
	<div class="contact-grid">
		<div class="contact-left">
			<p class="contact-tagline">Open to opportunities</p>
			<p>
				Looking for TPM and PM roles in SaaS, dev tools, EdTech, or consumer apps. Based in
				Singapore and available now.
			</p>
		</div>
		<nav class="contact-right" aria-label="Social and contact links">
			<a class="contact-link" href="https://www.linkedin.com/in/gerald-souders/" target="_blank" rel="noopener noreferrer">
				<span class="contact-dot" style="background:#0a66c2" aria-hidden="true"></span>
				LinkedIn
				<span class="contact-arrow" aria-hidden="true">↗</span>
			</a>
			<a class="contact-link" href="https://github.com/GMSoudersJr" target="_blank" rel="noopener noreferrer">
				<span class="contact-dot" style="background:var(--color-text-primary)" aria-hidden="true"></span>
				GitHub
				<span class="contact-arrow" aria-hidden="true">↗</span>
			</a>
	<a class="contact-link" href="mailto:gmsoudersjr@gmail.com">
				<span class="contact-dot" style="background:#ea4335" aria-hidden="true"></span>
				Email me
				<span class="contact-arrow" aria-hidden="true">↗</span>
			</a>
		</nav>
	</div>
</section>

<style>
	.section {
		padding: 52px 32px;
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
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		border: 1.5px solid var(--color-text-primary);
		border-radius: 16px;
		overflow: hidden;
	}
	.contact-left {
		padding: 36px;
		border-right: 1.5px solid var(--color-text-primary);
		background: var(--color-text-primary);
		color: var(--color-background-primary);
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.contact-tagline {
		font-size: 26px;
		font-weight: 500;
		letter-spacing: -0.5px;
	}
	.contact-left p:last-child {
		font-size: 14px;
		opacity: 0.65;
		line-height: 1.7;
	}
	.contact-right {
		padding: 28px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.contact-link {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 14px 16px;
		border: 1.5px solid var(--color-border-secondary);
		border-radius: 12px;
		color: var(--color-text-primary);
		text-decoration: none;
		transition: border-color 0.15s, background 0.15s;
		font-size: 13px;
		font-weight: 500;
	}
	.contact-link:hover {
		border-color: var(--color-text-primary);
		background: var(--color-background-secondary);
	}
	.contact-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.contact-arrow {
		margin-left: auto;
		font-size: 16px;
		color: var(--color-text-tertiary);
	}

	@media (max-width: 640px) {
		.section { padding: 40px 16px; }
		.contact-grid { grid-template-columns: 1fr; }
		.contact-left {
			border-right: none;
			border-bottom: 1.5px solid var(--color-text-primary);
		}
	}
</style>
