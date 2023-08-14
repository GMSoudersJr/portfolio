<script>
  import { thisYear } from '$lib/utils.js';

  const copyrightString = `©${thisYear()} by Gerald M. Souders Jr.`
</script>

<footer>
  <p>{copyrightString}</p>
</footer>

<style>
  footer {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    border-top: 0.5px dotted var(--backgroundSplash);
    padding: 3px;
    color: var(--backgroundSplash);
  }

  footer p {
    font-family: var(--contentTextFontFamily);
    font-size: 16px;
    line-height: 24px;
  }
</style>
