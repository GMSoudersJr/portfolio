<script>
  /**
   * a parameter to show the number of visits
   * @type {number}
   */
  export let totalVisits;
</script>

<div class="widget">
  <div class="visit-text">
    <p class="emoji">
      📍
    </p>
  </div>
  <div class="visit-number">
    <p id="visit-number">
      {totalVisits}
    </p>
  </div>
</div>


<style>
  .widget {
    box-sizing: border-box;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
    padding: 12px 8px;
    color: var(--basePurple);
  }

  .emoji {
    font-family: var(--emojiFontFamily);
  }
</style>
