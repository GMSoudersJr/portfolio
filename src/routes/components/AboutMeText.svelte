<script lang="ts">
</script>

<div id="about-me-text" class="lora-text">
  <p>
    For over 15 years, I taught and inspired individuals in South Korea.
    However, my curiosity led me to explore the web and its vast possibilities.
    I took the plunge into the world of tech and code, and it has been an
    exhilarating journey. Starting with freeCodeCamp.org, I honed my skills in
    HTML, CSS, and JavaScript, earning a full-stack developer certification. My
    Python adventures included creating a report card comment generator using
    my own data. I dabbled in Django and React Native, even developing a
    delivery-sharing app. While not all projects received expected funding, I
    persisted. A Raspberry Pi introduced me to remote systems, and I delved
    into Linux, bash, vim, and terminal commands. Recently, I tackled React.js
    for a startup, implementing features and squashing bugs. My passion lies in
    automating tests, optimizing processes, and crafting efficient solutions
    with Svelte and Playwright.
    Let’s create together!
  </p>
</div>

<style>
  p {
    font-size: 18px;
    line-height: 27px;
    text-wrap: balance;
  }

  #about-me-text {
    display: grid;
  }
  @media screen and (max-width: 80em) {
    p:first-child {
      margin-top: revert;
    }
    #about-me-text {
      justify-self: center;
    }
  }
</style>
