<script>
  import ProfilePicture from './components/ProfilePicture.svelte';
  import Contact from './components/Contact.svelte';
  import Splash from './components/Splash.svelte';

</script>

<div class="container">
  <Splash />
  <section class="about" id="aboutMe">
    <h2>About Me</h2>
    <ProfilePicture />
    <p>
      I'm an American living and working in South Korea.  After 15+ years of
      teaching English and mentoring youth, 7+ years of learning to code, and
      3+ years of experience mostly as a frontend developer, I've decided to
      switch completely to the digital realm.
    </p>
  </section>
  <Contact />
  <section class="portfolio" id="portfolio"></section>
  <h1>Hello, world!</h1>
</div>

<style>
  * {
    color: #E5E5CB
  }

  .container {
    background-image: linear-gradient(#1A120B, #D5CEA3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
  }

  .about {
    width: 40%;
    font-size: 1.2em;
  }

</style>
