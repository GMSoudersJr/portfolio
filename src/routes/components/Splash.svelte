<script lang="ts">
	import TechStack from "./TechStack.svelte";

</script>

<section id="/" class="section-container bg-gradient">
  <div class="bg-image" >
  </div>
  <div class="splash-box">
    <div id="headings">
      <h3 class="poppins-light">
        HI, MY NAME IS
      </h3>
      <h1 class="poppins-extrabold">
        <span class="gradient-text">
          Gerald Souders
        </span>
      </h1>
      <h1 class="gradient-text poppins-extrabold">
        <span class="gradient-text">
          I am a Software Engineer
        </span>
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
  .bg-image {
    background-image:
    linear-gradient(to bottom,
    rgba(0, 0, 0, 0.1) 80%,
    rgba(15, 21, 37, 1) 100%
    ),
    url('https://lh3.googleusercontent.com/pw/AP1GczNYy5HxnQYTFcBW8pMaFF-4yCJDVMmtbX_Oxl75tSbOei9atBQJihAKtqN_CRbzNIkCcG0mLot7CjV1D0pjHeLQ7LtbXBgmx2kGG2VAAFInf8hH--Va70wFyJWEaIC0pdywSr_YSCM8j2Is7Mym7d-G7A=w730-h973-s-no-gm?authuser=0');
    filter: blur(18px);
    -webkit-filter: blur(18px);
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #headings {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .section-container {
    height: 100vh;
    width: 100%;
    padding-bottom: 8%;
    display: grid;
    grid-template-columns: 1fr;
  }
  .splash-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    padding-left: 6vw;
    padding-right: 6vw;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    text-align: center;
    text-wrap: pretty;
  }
  @media screen and (max-width: 40em) {
    .splash-box {
      row-gap: 3rem;
    }

  }
</style>
