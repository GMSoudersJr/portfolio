<script>
  import { onMount } from 'svelte';

  const navItems = [
    {
      name: "Home",
      id: "nav-home",
      href: "/",
      position: "nav-left"
    },
    {
      name: "Find Me",
      id: "nav-findMe",
      href: "#findMe",
      position: "nav-right"
    },
    {
      name: "Projects",
      id: "nav-projects",
      href: "#projects",
      position: "nav-right"
    },
    {
      name: "About Me",
      id: "nav-aboutMe",
      href: "#aboutMe",
      position: "nav-right"
    },
  ];

  $: active = "";

  function handleClick(event) {
    let clicked = event.target.id
    let navItem = document.getElementById(clicked).parentElement;
    let allNavItems = navItem.parentElement.childNodes;
    allNavItems.forEach(item => {
      if ( item.classList.contains("active") && item.id != navItem.id ) {
        item.classList.remove("active");
      }
    })
    navItem.classList.add("active");
  }

  onMount(async() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav ul li");

    window.onscroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const navBarHeight = navItems[0].offsetHeight;
        const clientHeight = section.clientHeight
        if ( pageYOffset >= ((sectionTop - navBarHeight) - ( clientHeight / 2.5 ))) {
          current = section.getAttribute("id");
        }
      });

      navItems.forEach((item) => {
        item.classList.remove("active");
        if ( item.id == `li-nav-${current}` ) {
          item.classList.add("active");
        }
      })
    }
  })
</script>

<nav>
  <ul>
     {#each navItems as navItem (navItem.id)}
       <li
         class={`${active} ${navItem.position}`}
         id={`li-${navItem.id}`}
       >
         <a
           id={navItem.id}
           on:click={handleClick}
           href={navItem.href}
         >
           {navItem.name}
         </a>
       </li>
     {/each}
  </ul>
</nav>

<style>
  ul {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: var(--lightestBlue);
    overflow: hidden;
  }

  li {
    float: left;
    font-size: 1.5em;
  }

  li a {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 14px 16px;
    color: var(--backgroundWhite);
  }

  li a:hover {
    background-color: var(--lightestTurquoise);
    color: var(--darkestBlue);
  }

  .active > a {
    background-color: var(--darkestBlue);
    color: var(--lightest);
  }
  
  .nav-right {
    float: right;
  }
</style>
