<script>
  import profilePic from '/src/profilePic2023.jpg';
</script>

<div class="profile-pic-container">
  <img id="profile-pic" src={profilePic} alt="Profile Pic"/>
</div>

<style>
  .profile-pic-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #profile-pic {
    width: 20vw;
    height: auto;
    aspect-ratio: 1/1;
    position: relative;
    border: 2px solid white;
    border-radius: 50%;
    object-fit: cover;
  }

</style>
