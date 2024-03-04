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
  h3 {
    font-size: calc(4vw + 5px);
  }
  h1 {
    font-size: calc(6vw + 2px);
  }
  p {
    font-size: calc(2vw + 3px);
  }
  .bg-image {
    background-image:
    linear-gradient(to bottom,
    rgba(0, 0, 0, 0.1) 80%,
    rgba(15, 21, 37, 1) 100%
    ),
    url('https://lh3.googleusercontent.com/pw/AP1GczO2Jrj_3FB4oSnkpvmyDGk8J7_jWhJHxdDNv3WMVC4R_VRBajpu-U6XqcyIlA-cWuRjfbZ0xfbBMcxBuKCdt-Ze3OpYjdRmYtQRelfQ6IwFLfsff62Oihl2RPX7qu9eAbt7kajFJ4LqOM_Wa3NoE0r2Jg=w983-h1305-s-no-gm?authuser=0');
    filter: blur(18px);
    -webkit-filter: blur(18px);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .section-container {
    height: 100vh;
    width: 100%;
    padding-bottom: 8%;
  }
  .splash-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    display: grid;
    row-gap: 3.5vw;
    grid-template-rows: repeat(3, max-content);
    justify-content: center;
    justify-items: center;
    justify-self: center;
    text-align: center;
  }
</style>
