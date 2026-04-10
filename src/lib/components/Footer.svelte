<footer class="footer">
	<span class="footer-copy">© {new Date().getFullYear()} Gerald Souders</span>
	<div class="footer-right">
		<span class="footer-status">
			<span class="status-dot" aria-hidden="true"></span>
			Open to work
		</span>
		<span class="footer-copy" aria-label="Location: East &amp; Southeast Asia">East &amp; Southeast Asia</span>
	</div>
</footer>

<style>
	.footer {
		padding: 20px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1.5px solid var(--color-text-primary);
		flex-wrap: wrap;
		gap: 12px;
	}
	.footer-copy {
		font-size: 12px;
		color: var(--color-text-tertiary);
	}
	.footer-right {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}
	.footer-status {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		color: var(--color-text-secondary);
	}
	.status-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #1d9e75;
		flex-shrink: 0;
	}

	@media (max-width: 640px) {
		.footer { padding: 20px 16px; }
	}
</style>
