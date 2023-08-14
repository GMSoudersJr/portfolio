<script>
   
</script>

<div id="about-me-text">
  <p>
    I’ve been teaching and inspiring people in South Korea for more than a
    decade and a half. But I never stopped being a student myself. I always
    wanted to know more about the magic behind the web. So I decided to dive
    into the world of tech and code. And boy, was it deep! The more I explored,
    the more I realized how much there is to learn. And I love it! 😍
  </p>
  <p>
    My coding journey began on freeCodeCamp.org, where I acquired the essential
    skills of web development: HTML, CSS, and Javascript. I applied these
    skills to create responsive web pages and applications, and earned a
    full-stack developer certification. But I was eager to learn more. I
    encountered Python, and used it to develop a report card comment generator,
    using my previous comments as data. I also experimented with Django and
    React Native, and developed a prototype of a delivery-sharing app. However,
    the app did not receive the funding we expected. Then I explored linux,
    bash, vim, tmux, config files, and terminal commands. I purchased a
    raspberry pi, and learned how to work on a remote system. Then I got an
    opportunity to work for a start-up that had funding. I inherited a code
    base and had to re-learn React.js, but I successfully implemented all the
    features they requested and eliminated a multitude of the bugs.
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
    Besides sitting in front of a computer, you can find me running around my
    neighborhood or grinding at my local driving range.  I have recently fallen back in
    love with running and found a new passion in golf.
  </p>
</div>

<style>
  p, ul li {
    max-width: 600px;
    color: var(--contentText);
    font-size: 18px;
    line-height: 27px;
    font-family: var(--contentTextFontFamily);
    text-wrap: balance;
  }

  ul {
    margin-top: 0;
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
