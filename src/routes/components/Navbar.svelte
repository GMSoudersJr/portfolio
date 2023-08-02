<script>
  import { onMount } from 'svelte';
  import Hamburger from './Hamburger.svelte';

  const navItems = [
    {
      name: "Home",
      id: "nav-home",
      href: "/",
      class: "nav-item nav-left"
    },
    {
      name: "About Me",
      id: "nav-aboutMe",
      href: "#aboutMe",
      class: "nav-item nav-right"
    },
    {
      name: "Projects",
      id: "nav-projects",
      href: "#projects",
      class: "nav-item nav-right"
    },
    {
      name: "Find Me",
      id: "nav-findMe",
      href: "#findMe",
      class: "nav-item nav-right"
    },
  ];


  function handleClick(event) {
    let clicked = event.target.id
    let navItem = document.getElementById(clicked).parentElement;
    let allNavItemsNew = document.querySelectorAll(".navItem")
    let allNavItems = navItem.parentElement.childNodes;
    allNavItemsNew.forEach(( item ) => {
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
  <ul class="navbarUl" id="navbarUl">
     {#each navItems as navItem (navItem.id)}
     <li
       class={`${navItem.class}`}
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
     <li class="hamburger">
       <Hamburger />
     </li>
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
    display: grid;
    grid-template-columns: 1fr repeat(3, fit-content(160px));
    justify-items: end;
    align-items: center;
  }

  .nav-left {
    justify-self: start;
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

  ul .hamburger {
    display: none;
  }

  @media screen and (max-width: 80em) {
    ul {
      background-color: green;
    }
  }
  @media screen and (max-width: 64em) {
    ul {
      background-color: var(--baseGreen);
    }
  }
  @media screen and (max-width: 48em) {
    ul {
      background-color: orange;
    }
  }
  @media screen and (max-width: 40em) {
    ul {
      width: 100vw;
      background-color: #aaa;
    }

    .nav-right {
      display: none;
    }

    ul .hamburger {
      position: absolute;
      top: 7px;
      right: 14px;
      display: block;
    }

    .navbarUl.responsive {
      grid-template-columns: 1fr;
    }

    .nav-right.show, .nav-left{
      display: block;
      justify-self: center;
      width: 100%;
    }

    .active > a {
      background-color: var(--darkestPurple);
      color: var(--lightest);
    }


  }
</style>
