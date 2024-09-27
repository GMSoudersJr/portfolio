<script>
	import { thisYear } from '$lib/utils.js';

	const copyrightString = `©${thisYear()} by Gerald Souders`;
</script>

<footer>
	<a
		href="https://www.linkedin.com/in/gerald-souders/"
		target="_blank"
		referrerpolicy="no-referrer"
		id="linkedin-footer"
		class="linkedin-footer"
	>
		<img
			id="linkedin-footer-icon"
			src="https://lh3.googleusercontent.com/pw/AIL4fc8z_8RFwmLwOc9vVhbseCQ4Gvcq_oE-1zaNYA8yFcNKM_OIrilaFzW8eOmbnvMIg-XUNeFCt9lRoXF8WokZrFkevx6zfoMWtg19yWY_che6L98aKSFUuZN-H1ss0g6MRh2sDn7BRO96_eNsxxfPIMHyJw=w26-h26-s-no?authuser=0"
			alt="LinkedIn Icon"
			class="linkedin-footer-icon icon"
		/>
	</a>
	<p>{copyrightString}</p>
</footer>

<style>
	footer {
		box-sizing: border-box;
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
		width: 100%;
		border-top: 0.5px dotted var(--backgroundSplash);
		padding: 3px;
		color: var(--backgroundSplash);
	}

	a {
		text-decoration: none;
	}

	.icon {
		height: 25px;
		width: 25px;
	}

	footer p {
		font-family: var(--contentTextFontFamily);
		font-size: 16px;
		line-height: 24px;
	}
</style>
