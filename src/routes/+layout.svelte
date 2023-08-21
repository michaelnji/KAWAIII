<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import './styles.css';
	import '@fontsource/aladin';
	import '@fontsource/work-sans';
	import '@fontsource/work-sans/400.css';
	import '@fontsource/work-sans/500.css';
	import '@fontsource/work-sans/600.css';
	import '@fontsource/work-sans/700.css';
	import '@fontsource/work-sans/800.css';
	import '@fontsource/work-sans/900.css';
	// import '@fontsource/didact-gothic/400.css';
	import '@fontsource/gochi-hand';
</script>

<div class="app bg-base-300 !h-screen w-screen overflow-x-hidden font-body text-md">
	<header>
		<Navbar />
	</header>
	<main class="pt-24 mx-6 !h-full">
		<slot />
	</main>
</div>
