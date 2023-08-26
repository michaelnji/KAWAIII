<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { getImagesByTagClient } from '$lib/scripts/api/data/images';
	import { onMount } from 'svelte';
	import PictureHolder from '$lib/components/pictureHolder.svelte';
	import LoadingIcon from '$lib/components/loadingIcon.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { isArray } from 'mathjs';
	let imageData: any;
	export let data: any;
	$: currentTag = $page.url.pathname.split('/tags/')[1];
	imageData = data.info;
</script>

<section class="sm:mt-6 mt-2 px-6 w-full">
	<h1 class="font-extrabold text-5xl md:text-7xl lg:text-8xl text-center">
		Tag: <span class="text-primary font-head">{currentTag}</span>
	</h1>
	<div class="w-full mt-12">
		<div class="w-full">
			{#if isArray(imageData)}
				<div
					in:fade
					class="w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{#each imageData as image}
						{#if image.artist}
							<PictureHolder
								src={image.url}
								tags={image.tags}
								id={image.image_id}
								artistName={image.artist.name}
								imgSize={image.byte_size}
							/>
						{:else}
							<PictureHolder
								src={image.url}
								id={image.image_id}
								tags={image.tags}
								artistName={'no_artist'}
								imgSize={image.byte_size}
							/>
						{/if}
					{/each}
				</div>
				<div class="mt-12 w-full flex items-center justify-center">
					<a href="/tags/oppai" class="btn btn-outline btn-primary btn-wide btn-lg">See More</a>
				</div>
			{:else}
				<div
					class=" max-w-max mx-auto flex items-center justify-start gap-x-5 alert bg-primary"
					in:scale={{ duration: 300 }}
				>
					<div
						class="font-head h-[48px] w-[48px] rounded-full bg-primary-focus text-primary-content flex items-center justify-center text-4xl font-bold"
					>
						X
					</div>
					<div class="flex flex-col items-start justify-start gap-1">
						<h2 class="text-xl md:text-3xl font-bold text-primary-content">An error occurred</h2>
						<p class="text-primary-content text-left">
							{#if data.error}
								This is a problem with your internet connection
							{:else}
								We seem to have encountered an error
							{/if}
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
