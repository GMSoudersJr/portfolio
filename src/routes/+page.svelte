<script>
	import Contact from './components/Contact.svelte';
	import Splash from './components/Splash.svelte';
	import AboutMe from './components/AboutMe.svelte';
	import Projects from './components/Projects.svelte';
	import CounterWidget from './components/CounterWidget.svelte';
	import HeroBackground from './components/HeroBackground.svelte'; // Import HeroBackground

	/** @type {import('./$types').PageData} */
	export let data;
	//$: ({totalVisits, visitsByCountryWithCountryCode} = data);
</script>

<div class="page-wrapper">
	<HeroBackground />
	<!-- Add HeroBackground component -->
	<div class="container">
		<Splash />
		<AboutMe />
		<Projects />
		<Contact />
		{#await data then value}
			<CounterWidget
				totalVisits={value.totalVisits}
				visitsByCountryWithCountryCode={data.visitsByCountryWithCountryCode}
			/>
		{/await}
	</div>
</div>

<style>
	* {
		color: #e5e5cb;
	}
	.page-wrapper {
		position: relative; /* To contain the absolutely positioned HeroBackground */
		min-height: 100vh; /* Ensure it covers at least the viewport height */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start; /* Align content to the top */
	}
	.container {
		margin: 0px auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 2em;
		position: relative; /* Ensure content is above the background */
		z-index: 1; /* Ensure content is above the background */
		width: 100%; /* Allow container to take full width */
		max-width: 1200px; /* Optional: constrain max width for readability */
		padding: 20px; /* Add some padding */
		box-sizing: border-box; /* Include padding in width calculation */
	}
</style>
