<script>
  const navItems = [
    {
      name: "Home",
      id: "navHome",
      href: "/",
    },
    {
      name: "About Me",
      id: "navAboutMe",
      href: "#aboutMe",
    },
    {
      name: "Projects",
      id: "navProjects",
      href: "#projects",
    },
    {
      name: "Find Me",
      id: "navFindMe",
      href: "#findMe",
    },
  ];

  $: active = "";
  function handleClick(event) {
    let clicked = event.target.id
    let navItem = document.getElementById(clicked);
    let allNavItems = navItem.parentElement.parentElement.childNodes;
    allNavItems.forEach(item => {
      if ( item.firstChild.classList.contains("active") && item.firstChild.id != navItem.id ) {
        item.firstChild.classList.remove("active");
      }
    })
    navItem.classList.add("active");
    console.log(allNavItems);
  }
</script>

<nav>
  <ul>
     {#each navItems as navItem (navItem.id)}
       <li>
         <a
           id={navItem.id}
           on:click={handleClick}
           href={navItem.href}
           class={active}
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
    background-color: var(--lightest);
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
  }

  li a:hover {
    background-color: var(--light);
    color: var(--dark);
  }

  .active {
    background-color: var(--dark);
    color: var(--lightest);
  }

</style>
