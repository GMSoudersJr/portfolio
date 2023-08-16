<script>
   
</script>

<div id="about-me-text">
  <p>
    For over 15 years, I have been teaching and inspiring people in South
    Korea. But I have also been an avid learner myself. I have always been
    interested in the web and its opportunities. So I decided to plunge into
    the world of tech and code. And it has been a wonderful experience! The
    more I experimented, the more I realized how much there is to create. And I
    relish every aspect of it!
  </p>
  <p>
    My coding journey began on freeCodeCamp.org, where I acquired the essential
    skills of web development: HTML, CSS, and Javascript. I applied these
    skills to create responsive web pages and applications, and earned a
    full-stack developer certification. But I was eager to learn more. I
    encountered Python, and used it to develop a report card comment generator,
    using my previous comments as data. I also experimented with Django and
    React Native, and developed a prototype of a delivery-sharing app. However,
    the app did not receive the funding we expected. Then I purchased a
    raspberry pi, and learned how to work on a remote system. From there, I
    explored linux, bash, vim, tmux, config files, and terminal commands. Then
    I got an opportunity to work for a start-up that had funding. I inherited
    a code base and had to re-learn React.js, but I successfully implemented
    all the features they requested and eliminated a multitude of the bugs.
  </p>
  <p>
    I code to automate tasks and save time for myself and others. I look for
    patterns and opportunities to optimize processes that are tedious and
    time-consuming. Whether it is creating PO Sheets, invoices, or reports,
    I can design solutions that can handle them efficiently and accurately. I
    enjoy using my skills and creativity to solve problems and improve
    workflows. 🤝
  </p>
  <p>
    My computer is my primary tool for coding, but I also have other interests
    that keep me in shape and entertained. I have fun running around my
    neighborhood and playing golf at the closest driving range. Running is a
    hobby that I have rediscovered, and golf is a passion that I have newly
    developed.
  </p>
</div>

<style>
  p {
    max-width: 600px;
    color: var(--contentText);
    font-size: 18px;
    line-height: 27px;
    font-family: var(--contentTextFontFamily);
    text-wrap: balance;
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

  @media screen and (max-width: 80em) {
    p:first-child {
      margin-top: revert;
    }
  }
</style>
