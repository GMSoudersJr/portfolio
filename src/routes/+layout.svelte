<script>
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import { onMount } from 'svelte';

	let display;
	onMount(async () => {
		display = Navbar;
	});
	$: navbar = display;
</script>

<svelte:head>
	<title>Gerald Souders</title>
</svelte:head>

<div id="navbar">
	<svelte:component this={navbar} />
</div>

<slot />

<Footer />

<style>
	:root {
		scroll-behavior: smooth;
		--darkest: #1a120b;
		--dark: #3c2a21;
		--light: #d5cea3;
		--lightest: #e5e5cb;

		--navActive: #f9e795;
		--navHover: #fee715;
		--mobileNavColor: #101820;
		--tabletNavColor: #101820;
		--laptopNavColor: #101820;
		--monitorNavColor: #101820;
		--charcoalBlack: #101820;

		--hamburgerColor: #fee715;
		--lightBlueText: #add8e6;
		--darkBlueText: #00008b;
		--backgroundSplash: #101820;
		--backgroundOffWhite: #fcf6f5;
		--backgroundWhite: #f1f1f1;
		--backgroundBlue: #4879ff;
		--lightestBlue: #9ab5fe;
		--lighterBlue: #6f95ff;
		--darkerBlue: #1d59ff;
		--darkestBlue: #0748fb;

		/* Typography */
		--contentText: var(--darkestGallery);
		--sectionTitleFontSize: 48px;
		--sectionTitleLineHeight: 52.8px;
		--sectionTitleLetterSpacing: -0.03em;
		--sectionTitleFontFamily: 'IBM Plex Sans Condensed', sans-serif;
		--projectNameAndStackLetterSpacing: -0.015em;
		--projectNameAndStackFontFamily: 'IBM Plex Sans Condensed', sans-serif;
		--navbarFontFamily: 'IBM Plex Sans Condensed', sans-serif;
		--projectDescriptionFontFamily: 'IBM Plex Sans', sans-serif;
		--contentTextFontFamily: 'IBM Plex Sans', sans-serif;
		--emojiFontFamily: 'Noto Color Emoji', 'IBM Plex Sans Condensed', sans-serif;

		--projectImageBackground: #4cbb17;
		--projectDetailsBackground: #272829;
		/* turquoise-ish colors */
		--baseTurquoise: #36dfff;
		--lightestTurquoise: #90edfe;
		--lighterTurquoise: #61e6ff;
		--darkerTurquoise: #07d8ff;
		--darkestTurquoise: #02d3fb;

		/* purple-ish colors */
		--basePurple: #7449ff;
		--lightestPurple: #b29bfe;
		--lighterPurple: #926fff;
		--darkerPurple: #541eff;
		--darkestPurple: #4107fb;

		/* green-ish colors */
		--baseGreen: #31ff9c;
		--lightestGreen: #8efec8;
		--lighterGreen: #5dffb1;
		--darkerGreen: #01ff85;
		--darkestGreen: #00fc83;

		/* gallery colors */
		--baseGallery: #14161a;
		--lightestGallery: #8d8f93;
		--lighterGallery: #4a4d53;
		--darkerGallery: #0d121e;
		--darkestGallery: #00040c;

		/* media-query breakpoints - using em to account for zooming on the page*/
		--monitor: 80em; /*1280px*/
		--laptop: 64em; /*1024px*/
		--tablet: 48em; /*768px*/
		--mobile: 40em; /*640px*/
	}

	:root {
		/*
    background-image: linear-gradient(var(--backgroundOffWhite) 65%, var(--backgroundBlue));
     */
		background-color: var(--backgroundOffWhite);
		overflow-x: hidden;
	}
</style>
