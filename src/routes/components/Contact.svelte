<script>
	import { socialDetails } from '$lib/socials.js';

	let innerWidth = 0;
	$: displayIconLong = innerWidth <= 64 * 16;
</script>

<svelte:window bind:innerWidth />
<section class="contact" id="contact">
	<h1 class="section-title">Contact</h1>
	{#each socialDetails as social (social.id)}
		<a
			href={social.href}
			target="_blank"
			referrerpolicy="no-referrer"
			id={social.id}
			class={social.class}
			title={social.title}
		>
			{#if social.id === 'email'}
				{social.textLong}
			{:else}
				<img id={`${social.id}-icon`} class="icon" src={social.iconLong} alt={social.alt} />
			{/if}
		</a>
	{/each}
</section>

<style>
	section {
		scroll-margin-top: 56px;
		box-sizing: border-box;
		height: fit-content;
		width: 60%;
		display: grid;
		grid:
			'title title title'
			'linkedIn github codepen'
			'email glitch freeCodeCamp';
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}
	#linkedIn {
		grid-area: linkedIn;
	}
	#github {
		grid-area: github;
	}
	#codepen {
		grid-area: codepen;
	}
	#email {
		grid-area: email;
	}
	#glitch {
		grid-area: glitch;
	}
	#freeCodeCamp {
		grid-area: freeCodeCamp;
	}

	.section-title {
		grid-area: title;
		color: var(--contentText);
		font-size: var(--sectionTitleFontSize);
		font-family: var(--sectionTitleFontFamily);
		line-height: var(--sectionTitleLineHeight);
		letter-spacing: var(--sectionTitleLetterSpacing);
		align-self: start;
	}

	/*
  .contact-container {
    width: 100%;
    display: grid;
    grid-template-row: repeat(6, 1fr);
    grid-auto-flow: column;
    justify-content: space-around;
  }
   */

	a {
		text-decoration: none;
		padding: 15px;
		background: var(--projectImageBackground);
		border-radius: 10px;
	}

	.icon,
	.email {
		height: 30px;
		font-size: 30px;
		font-weight: 700;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	.email {
		font-family: var(--contentTextFontFamily);
		font-family: var(--emojiFontFamily);
	}

	@media screen and (max-width: 80em) {
		.contact-container {
			width: 70%;
		}
		.icon,
		.email {
			height: 40px;
			font-size: 40px;
		}
	}
	@media screen and (max-width: 64em) {
		section {
			width: 100%;
			align-self: center;
			justify-content: center;
			text-align: center;
			grid:
				'title'
				'linkedIn'
				'github'
				'codepen'
				'email'
				'glitch'
				'freeCodeCamp';
		}
		/*
    .contact-container {
      width: 100%;
      grid: auto repeat(6, 1fr) / 1fr;
      grid-auto-flow: row;
      gap: 2em;
    }
     */

		a {
			width: 100%;
			background-image: linear-gradient(var(--backgroundWhite), var(--backgroundWhite));
			padding: 40px 10px;
			box-sizing: border-box;
		}

		a:hover {
			background-image: linear-gradient(var(--backgroundWhite), var(--backgroundWhite));
		}

		.email {
			color: var(--charcoalBlack);
			font-family: var(--emojiFontFamily);
			font-weight: 575;
			font-size: 2.5em;
		}

		.icon,
		.email {
			max-width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	@media screen and (max-width: 48em) {
	}
	@media screen and (max-width: 40em) {
		.contact-container {
			width: 100%;
		}
	}
</style>
