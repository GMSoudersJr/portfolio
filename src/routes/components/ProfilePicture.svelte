<script>
  import profilePic from '/src/dalProPicCropped.jpg';
</script>

<div class="profile-pic-container">
  <img
    id="profile-pic"
    src={profilePic}
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
    width: 18vw;
    height: auto;
    aspect-ratio: 1/1;
    position: relative;
    z-index: -1;
    border: 2px solid brown;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 blue, 0 6px 20px 0 purple;
  }

</style>
