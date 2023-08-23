<script lang="ts">
	import { getImagesClient, getTagsClient } from '$lib/scripts/api/data/images';
	import { onMount } from 'svelte';
	import PictureHolder from '../pictureHolder.svelte';
	// let imageData;
	// onMount(async () => {
	// 	imageData = await getImagesClient();
	// 	console.log(imageData);
	// });
</script>

<div class="w-full">
	<div class="w-full">
		<div class="w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- <PictureHolder src={k} artistName="Myk3c1phor4" views={3000} /> -->
		</div>
		<div class="mx-auto mt-12 w-full flex items-center justify-center">
			<button class="btn btn-outline btn-primary btn-wide btn-lg">Load More</button>
		</div>
	</div>
</div>
