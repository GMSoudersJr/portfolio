<script>
  const profilePicUrl = "https://lh3.googleusercontent.com/pw/AIL4fc_H8MUGLSQtrH9KnBIH0EURoS7J0LSiPjE2i0BMfTG_gsaYFp0ZjmOavjxBe9Uvt04RAn7HiR6ecmyKjOEOBb21nJDo6OmLyjz6yd3qs1qII_ei8KNwAJW6lmvHGPRNYcZ7eeIMlORPHSHAxQqqPk6uGA=w944-h944-s-no?authuser=0";
</script>

<div class="profile-pic-container">
  <img
    id="profile-pic"
    src={profilePicUrl}
    alt="Profile Pic"
  />
</div>

<style>
  .profile-pic-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #profile-pic {
    max-width: 14em;
    height: auto;
    aspect-ratio: 1/1;
    border: 2px solid var(--darkestGreen);
    border-radius: 30%;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 var(--darkestBlue), 0 6px 20px 0 var(--lightestBlue);
    box-sizing: border-box;
  }

  @media screen and (max-width: 80em) {
    #profile-pic {
      max-width: 13em;
    }
  }
  @media screen and (max-width: 64em) {
    #profile-pic {
      max-width: 12em;
    }
  }
  @media screen and (max-width: 48em) {
    #profile-pic {
      max-width: 11em;
    }
  }
  @media screen and (max-width: 40em) {
    #profile-pic {
      max-width: 10em;
    }
  }

</style>
