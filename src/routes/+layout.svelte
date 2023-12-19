<script>
  import HappyDay from './components/HappyDay.svelte';
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import { onMount } from 'svelte';
  onMount(async() => {
    new Navbar({
      target: document.getElementById("navbar"),
      intro: true,
    });
  })
</script>

<svelte:head>
  <title>
    Gerald Souders
  </title>
</svelte:head>

<div id="navbar"></div>

<slot />

<Footer />

<style>
  :root {
    --darkest: #1A120B;
    --dark: #3C2A21;
    --light: #D5CEA3;
    --lightest: #E5E5CB;

    --navActive: #F9E795;
    --navHover: #FEE715;
    --mobileNavColor: #101820;
    --tabletNavColor: #101820;
    --laptopNavColor: #101820;
    --monitorNavColor: #101820;
    --charcoalBlack: #101820;

    --hamburgerColor: #FEE715;
    --lightBlueText: #ADD8E6;
    --darkBlueText: #00008B;
    --backgroundSplash: #101820;
    --backgroundOffWhite: #FCF6F5;
    --backgroundWhite: #F1F1F1;
    --backgroundBlue: #4879FF;
    --lightestBlue: #9AB5FE;
    --lighterBlue: #6F95FF;
    --darkerBlue: #1D59FF;
    --darkestBlue: #0748FB;

    /* Typography */
    --contentText: var(--darkestGallery);
    --sectionTitleFontSize: 48px;
    --sectionTitleLineHeight: 52.8px;
    --sectionTitleLetterSpacing: -0.03em;
    --sectionTitleFontFamily: "IBM Plex Sans Condensed", sans-serif;
    --projectNameAndStackLetterSpacing: -0.015em;
    --projectNameAndStackFontFamily: "IBM Plex Sans Condensed", sans-serif;
    --navbarFontFamily: "IBM Plex Sans Condensed", sans-serif;
    --projectDescriptionFontFamily: "IBM Plex Sans", sans-serif;
    --contentTextFontFamily: "IBM Plex Sans", sans-serif;
    --emojiFontFamily: "Noto Color Emoji", "IBM Plex Sans Condensed", sans-serif;

    --projectImageBackground: #4CBB17;
    --projectDetailsBackground: #272829;
    /* turquoise-ish colors */
    --baseTurquoise: #36DFFF;
    --lightestTurquoise: #90EDFE;
    --lighterTurquoise: #61E6FF;
    --darkerTurquoise: #07D8FF;
    --darkestTurquoise: #02D3FB;

    /* purple-ish colors */
    --basePurple: #7449FF;
    --lightestPurple: #B29BFE;
    --lighterPurple: #926FFF;
    --darkerPurple: #541EFF;
    --darkestPurple: #4107FB;

    /* green-ish colors */
    --baseGreen: #31FF9C;
    --lightestGreen: #8EFEC8;
    --lighterGreen: #5DFFB1;
    --darkerGreen: #01FF85;
    --darkestGreen: #00FC83;

    /* gallery colors */
    --baseGallery: #14161A;
    --lightestGallery: #8D8F93;
    --lighterGallery: #4A4D53;
    --darkerGallery: #0D121E;
    --darkestGallery: #00040C;

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
