<script>
	import Contact from './components/Contact.svelte';
	import Splash from './components/Splash.svelte';
	import AboutMe from './components/AboutMe.svelte';
	import Projects from './components/Projects.svelte';
	import CounterWidget from './components/CounterWidget.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	//$: ({totalVisits, visitsByCountryWithCountryCode} = data);
</script>

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

<style>
	* {
		color: #e5e5cb;
	}
	.container {
		margin: 0px auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 2em;
	}
</style>
