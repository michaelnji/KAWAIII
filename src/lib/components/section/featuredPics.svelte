<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getImagesClient, getTagsClient } from '$lib/scripts/api/data/images';
	import { onMount } from 'svelte';
	import PictureHolder from '../pictureHolder.svelte';
	import LoadingIcon from '../loadingIcon.svelte';
	let imageData: any;
	let ready: boolean = false;
	onMount(async () => {
		imageData = await getImagesClient();
		imageData = imageData.filter((e: any, i: number) => i < 10);
		ready = true;
	});
</script>

<div class="w-full">
	<div class="w-full">
		{#if ready}
			<div
				in:fade
				class="w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
						/>
					{:else}
						<PictureHolder
							src={image.url}
							id={image.image_id}
							width={image.width}
							height={image.height}
							tags={image.tags}
							artistName={'no_artist'}
						/>
					{/if}
				{/each}
			</div>
			<div class="mt-12 w-full flex items-center justify-center">
				<button class="btn btn-outline btn-primary btn-wide btn-lg">Load More</button>
			</div>
		{:else}
			<div class="w-full justify-center flex"><LoadingIcon /></div>
		{/if}
	</div>
</div>
