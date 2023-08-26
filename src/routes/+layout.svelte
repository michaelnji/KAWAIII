<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import './styles.css';
	import '@fontsource/aladin';
	import '@fontsource/gochi-hand';
	import '@fontsource/work-sans';
	import '@fontsource/work-sans/400.css';
	import '@fontsource/work-sans/500.css';
	import '@fontsource/work-sans/600.css';
	import '@fontsource/work-sans/700.css';
	import '@fontsource/work-sans/800.css';
	import '@fontsource/work-sans/900.css';
	import '@fontsource/grandstander';
	import '@fontsource/grandstander/900.css';
	import '@fontsource/grandstander/800.css';
	import { navigating } from '$app/stores';
	import LoadingIcon from '$lib/components/loadingIcon.svelte';
</script>

<div class="app bg-base-300 !h-screen w-screen overflow-x-hidden font-body text-md">
	{#if $navigating}
		<div class="w-full h-full grid place-items-center">
			<LoadingIcon />
		</div>
	{:else}
		<header>
			<Navbar />
		</header>
		<main class="pt-24 !h-full">
			<slot />
		</main>
	{/if}
</div>
