<script>
   
</script>

<div id="about-me-text">
  <p>
    For over 15 years, I have been an educator and mentor in South Korea. My
    passion for learning and internal motivation led me back to tech.  After
    years of surfing the internet, I realized how little I actually understood
    about how it works.  Even now, the more I learn, the more I know I don't
    know.
  </p>
  <p>
    My coding journey started with freeCodeCamp.org learning HTML, CSS,
    and Javascript to develop responsive web pages and applications.  After
    completing the full-stack developer certification, I thought I was done.
    Then I came upon Python and created my own report card comment generator
    using my years of previous comments as data.  I then stumbled into Django
    and React Native.  With those, I made a prototype of a delivery-sharing
    app, but the founders could not raise any funding.  From there I went down
    the rabbit hole of linux, bash, vim, tmux, config files, playing in the
    terminal.  I bought a raspberry pi and got comfortable with working on
    a remote system.  Then an opportunity came to put my knowledge to use for
    a start-up that had funding.  I inherited a code base and had to re-learn
    React.js, but I implemented all of the features they asked for and got rid
    of most of the bugs.
  </p>
  <p>
    I spend time coding, so myself and others can spend time doing other
    things.  When I notice repetitive tasks that take little effort, but much
    time to complete, my brain goes to work on ways for a computer to handle
    them.  <a href="#projects">Projects</a> Tired of making PO Sheets manually?
    I got you!  Tired of making invoices one by one?  I got you!  Tired of
    filling out report cards one at a time?  I got you!
  </p>
  <p>
    Besides sitting in front of a computer, you can find me running around my
    neighborhood or at the local driving range.  I have recently fallen back in
    love with running and found a new passion in golf.
  </p>
</div>

<style>
  p {
    color: var(--contentText);
    font-size: 1.2em;
    line-height: 1.5em;
    font-family: var(--contentTextFontFamily);
  }

  #about-me-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  p:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 64em) {
    p:first-child {
      margin-top: revert;
    }
  }
</style>
