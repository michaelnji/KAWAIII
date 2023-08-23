<script>
	// @ts-nocheck

	export let src;
	export let alt;
	export let classes;

	import { onMount } from 'svelte';

	let loaded = false;
	let thisImage;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<figure class="relative border border-base-content border-opacity-5">
	{#if alt && alt !== ''}
		<div
			class="tooltip absolute left-4 top-4 z-10 tooltip-right tooltip-info"
			data-tip="The alt of the image"
		>
			<span class="badge badge-sm">
				{alt}
			</span>
		</div>
	{/if}
	<img {src} {alt} class={classes} class:loaded bind:this={thisImage} loading="lazy" />
</figure>

<style>
	img {
		@apply blur-md transition ease-in-out duration-1000 w-full object-cover h-full;
		/* opacity: 0; */
		background-color: transparent;
		background-image: linear-gradient(173deg, #fbda61 10%, #ff5acd 90%);
	}
	img.loaded {
		@apply blur-0 object-cover;
		background-image: none;
		opacity: 1 !important;
		height: auto;
	}
</style>
