<script lang="ts">
  const techStack = [
    {
      name: 'svelte',
      badgeLabel: 'svelte',
      hexColor: 'FF3E00',
      iconName: 'svelte',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'playwright',
      badgeLabel: 'playwright',
      hexColor: '2EAD33',
      iconName: 'playwright',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'javascript',
      badgeLabel: 'javascript',
      hexColor: 'F7DF1E',
      iconName: 'javascript',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'typescript',
      badgeLabel: 'typescript',
      hexColor: '3178C6',
      iconName: 'typescript',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'mongodb',
      badgeLabel: 'mongodb',
      hexColor: '47A248',
      iconName: 'mongodb',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'node',
      badgeLabel: 'node',
      hexColor: '339933',
      iconName: 'node.js',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'html',
      badgeLabel: 'html',
      hexColor: 'E34F26',
      iconName: 'html5',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'css',
      badgeLabel: 'css',
      hexColor: '1572B6',
      iconName: 'css3',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
/*
    {
      name: 'react',
      badgeLabel: 'react',
      hexColor: '61DAFB',
      iconName: 'react',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
*/
    {
      name: 'bash',
      badgeLabel: 'bash',
      hexColor: '4EAA25',
      iconName: 'gnu%20bash',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'vercel',
      badgeLabel: 'vercel',
      hexColor: '000000',
      iconName: 'vercel',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
    {
      name: 'neovim',
      badgeLabel: 'neovim',
      hexColor: '57A143',
      iconName: 'neovim',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
/*
    {
      name: 'python',
      badgeLabel: 'python',
      hexColor: '3776AB',
      iconName: 'python',
      logoColor: 'FFFFFF',
      style: 'plastic',
    },
*/
  ]
</script>

<section class="tech-stack">
{#each techStack as tech (tech)}
  <img
    src={`https://img.shields.io/badge/-${tech.badgeLabel}-000000?logo=${tech.iconName}&logoColor=${tech.logoColor}&style=for-the-badge`}
    alt={`${tech.name}`}
  >
{/each}
</section>

<style>
  img {
    opacity: 70%;
    border-radius: 8px;
  }
  .tech-stack {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 3vw;
    justify-content: space-evenly;
  }
</style>

