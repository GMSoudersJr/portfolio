<script lang="ts">
</script>

<section id="/" class="section-container">
  <div class="splash-box">
    <h3 class="poppins-bold">
      HI, MY NAME IS
    </h3>
    <h1 class="gradient-text poppins-extrabold">
      Gerald Souders
    </h1>
    <h1 class="gradient-text poppins-extrabold">
      I am a Software Engineer
    </h1>
    <div>
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
    <p class="poppins-medium">
      With a strong collaborative spirit, I thrive in team environments to drive
      innovation and deliver exceptional solutions.
    </p>
    <p class="poppins-medium">
      Ready to elevate your porjects!
    </p>
    <button
      class="button btn-primary"
      id="lets-get-started"
    >
      🚀 Let's Get Started!
    </button>
  </div>
</section>

<style>
  h1 {
    font-size: 2em;
  }
  button {
    padding: 10px 48px;
    border-radius: 5px;
  }
  .section-container {
    background-image: url('../../lib/images/portfolioSplashBackground.png');
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: min-content;
    padding-top: 82px;
  }
  .splash-box {
    width: 60%;
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: center;
  }
  p {
    text-align: center;
  }
  .gradient-text {
    background-image: linear-gradient(135deg, #259259, #fff);
    background-clip: text;
    color: transparent;
  }
</style>
