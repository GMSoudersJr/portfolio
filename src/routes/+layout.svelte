<script>
  import HappyDay from './components/HappyDay.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

<Navbar />
<slot />

<style>
  :root {
    --darkest: #1A120B;
    --dark: #3C2A21;
    --light: #D5CEA3;
    --lightest: #E5E5CB;

    --backgroundWhite: #F1F1F1;
    --backgroundBlue: #4879FF;
    --lightestBlue: #9AB5FE;
    --lighterBlue: #6F95FF;
    --darkerBlue: #1D59FF;
    --darkestBlue: #0748FB;

    --contentText: var(--darkestPurple);
    --sectionTitleFontSize: 28px;

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

    /* media-query breakpoints - using em to account for zooming on the page*/
    --monitor: 80em; /*1280px*/
    --laptop: 64em; /*1024px*/
    --tablet: 48em; /*768px*/
    --mobile: 40em; /*640px*/

  }

  :root {
    background-image: linear-gradient(var(--backgroundWhite) 65%, var(--backgroundBlue));
    overflow-x: hidden;
  }
</style>
