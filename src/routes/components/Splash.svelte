<script lang="ts">
	import TechStack from "./TechStack.svelte";

</script>

<section id="/" class="section-container bg-gradient">
  <div class="splash-box">
    <div id="headings">
      <h3 class="poppins-light">
        HI, MY NAME IS
      </h3>
      <h1 class="gradient-text poppins-extrabold">
        Gerald Souders
      </h1>
      <h1 class="gradient-text poppins-extrabold">
        I am a Software Engineer
      </h1>
    </div>
    <div id="paragraph-block">
      <div id="bold-sentence">
        <p class="poppins-black">
          <strong>
            3+ years as a product-driven
          </strong>
          <span class="gradient-text">
            Software Engineer
          </span>
          !
        </p>
      </div>
      <p class="poppins-medium long-sentence">
        With a strong collaborative spirit, I thrive in team environments to drive
        innovation and deliver exceptional solutions.
      </p>
      <p class="poppins-medium">
        Ready to elevate your projects!
      </p>
      </div>
    <TechStack />
  </div>
</section>

<style>
  h3 {
    font-size: 4vw;
  }
  h1 {
    font-size: 6vw;
  }
  p {
    font-size: 2vw;
  }
  button {
    padding: 10px 48px;
    margin-top: 42px;
    border-radius: 5px;
    font-size: minmax(1.5vw, 2vw);
  }
  .section-container {
    background-image:
    linear-gradient(to bottom,
    rgba(0, 0, 0, 0) 80%,
    rgba(15, 21, 37, 1) 100%
    ),
    url('../../lib/images/portfolioSplashBackground.png');
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: grid;
    padding-top: 82px;
    padding-bottom: 20px;
  }
  .splash-box {
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, min-content);
    justify-content: center;
    justify-items: center;
    justify-self: center;
    text-align: center;
  }
</style>
