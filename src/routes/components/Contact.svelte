<script>
  import linkedInIcon from '/src/In-White-96.png';
  import githubIcon from '/src/github-mark-white.png';
</script>

<section class="contact" id="contact">
  <div id="linkedin" class="contact-icon">
    <a
      href="https://www.linkedin.com/in/gerald-souders/"
      target="_blank"
      referrerpolicy="no-referrer"
    >
      <img id="linkedin-logo" class="icon" src={linkedInIcon} alt="LinkedIn Logo" />
    </a>
  </div>
  <div id="github" class="contact-icon">
    <a
      href="https://github.com/GMSoudersJr"
      target="_blank"
      referrerpolicy="no-referrer"
    >
      <img id="github-logo" class="icon" src={githubIcon} alt="GitHub Logo" />
    </a>
  </div>
  <div class="email">
    <a href="mailto: gmsoudersjr@gmail.com">@</a>
  </div>
</section>


<style>
  .contact {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon,
  .email {
    height: 50px;
    aspect-ratio: 1/1;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white
  }
</style>
