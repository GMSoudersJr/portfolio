<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Work from '$lib/components/Work.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Visitors from '$lib/components/Visitors.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Gerald Souders — Web App Developer</title>
</svelte:head>

<Navbar />
<main id="main-content">
	<Hero />
	<Work />
	<About />
	<Skills />
	<Visitors
		visitsByCountryWithCountryCode={data.visitsByCountryWithCountryCode ?? []}
		totalVisits={data.totalVisits ?? 0}
	/>
	<Contact />
</main>
<Footer />
