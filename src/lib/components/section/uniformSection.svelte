<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { getImagesByTagClient } from '$lib/scripts/api/data/images';
	import { onMount } from 'svelte';
	import PictureHolder from '../pictureHolder.svelte';
	import LoadingIcon from '../loadingIcon.svelte';
	let imageData: any;
	let ready: boolean = false;
	onMount(async () => {
		imageData = await getImagesByTagClient('uniform');
		// imageData = imageData.filter((e: any, i: number) => i < 5);
		ready = true;
	});
</script>

<h1 class=" text-6xl mb-16 text-center font-head">
	#Kawaiii: <small class="font-body font-bold">Uniform</small>
</h1>
<!-- <p class="mb-16 mt-1 max-w-xl mx-auto text-base font-medium text-center">
	One of two main protagonists (alongside Wakana Gojo) in the anime and manga series My Dress-Up
	Darling.
</p> -->
<div class="w-full">
	<div class="w-full">
		{#if ready && imageData && !imageData.error}
			<div
				in:fade
				class="w-full place-items-center place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{#each imageData as image}
					{#if image.artist}
						<PictureHolder
							src={image.url}
							width={image.width}
							height={image.height}
							tags={image.tags}
							id={image.image_id}
							artistName={image.artist.name}
							imgSize={image.byte_size}
						/>
					{:else}
						<PictureHolder
							src={image.url}
							id={image.image_id}
							width={image.width}
							height={image.height}
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
		{:else if imageData === null || (imageData && imageData.error)}
			<div
				class=" max-w-max mx-auto flex items-center justify-start gap-x-5 alert bg-primary"
				in:fly={{ duration: 700, y: 400 }}
			>
				<div
					class="font-head h-[48px] w-[48px] rounded-full bg-primary-focus text-primary-content flex items-center justify-center text-4xl font-bold"
				>
					X
				</div>
				<div class="flex flex-col items-start justify-start gap-1">
					<h2 class="text-3xl font-bold text-primary-content">An error occurred</h2>
					<p class="text-primary-content">
						{#if imageData && imageData.error}
							{imageData.error}
						{:else}
							We seem to have encountered an error
						{/if}
					</p>
				</div>
			</div>
		{:else}
			<div class="w-full justify-center flex"><LoadingIcon /></div>
		{/if}
	</div>
</div>
