<script>
  import profilePic from '/src/profilePic2023.jpg';
  import linkedInIcon from '/src/In-White-96.png';
  import githubIcon from '/src/github-mark-white.png';
</script>

<div class="container">
  <section class="splash" id="splash">
    <div class="profile-pic-container">
      <img id="profile-pic" src={profilePic} alt="Profile Pic"/>
    </div>
  </section>
  <section class="about" id="about">
    <h2>About Me</h2>
    <p>
      I'm an American living and working in South Korea.  After 15+ years of
      teaching English and mentoring youth, 7+ years of learning to code, and
      3+ years of experience mostly as a frontend developer, I've decided to
      switch completely to the digital realm.
    </p>
  </section>
  <section class="portfolio" id="portfolio"></section>
  <section class="contact" id="contact">
    <div id="linkedin" class="contact-icon">
      <a
        href="https://www.linkedin.com/in/gerald-souders/"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        <img id="linkedin-logo" src={linkedInIcon} alt="LinkedIn Logo" />
      </a>
    </div>
    <div id="github" class="contact-icon">
      <a
        href="https://github.com/GMSoudersJr"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        <img id="github-logo" src={githubIcon} alt="GitHub Logo" />
      </a>
    </div>
    <div class="email">
      <a href="mailto: gmsoudersjr@gmail.com">@</a>
    </div>
  </section>
  <h1>Hello, world!</h1>
</div>

<style>
  * {
    box-sizing: border-box;
    overflow: hidden;
    color: #E5E5CB
  }

  .container {
    background-image: linear-gradient(#D5CEA3, #1A120B);
    height: 97.5vh;
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

  .splash {
    width: 300px;
    height: window;
  }

  .profile-pic-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    margin-left: calc(50% - 100px);
  }

  #profile-pic {
    width: 300px;
    height: auto;
    position: relative;
    bottom: 20px;
  }

  .contact {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #linkedin-logo,
  #github-logo {
    height: 50px;
  }

  .email {
    height: 50px;
    font-size: 42px;
  }
  a {
    text-decoration: none;
  }
</style>
