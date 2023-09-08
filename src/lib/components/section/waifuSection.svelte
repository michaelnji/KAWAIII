<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import PictureHolder from '../pictureHolder.svelte';
	import { isArray } from 'mathjs';
	export let imageData: any;
</script>

{#if imageData && isArray(imageData)}
	<h1 class="text-6xl text-center font-head">
		#Featured: <small class="font-head font-bold block lg:inline-block">Waifu </small>
	</h1>
	<p class="mb-16 mt-1 max-w-xl mx-auto text-base font-medium text-center">
		A female anime/manga character.
	</p>
	<div class="w-full">
		<div class="w-full">
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
							imgSize={image.byte_size}
						/>
					{:else}
						<PictureHolder
							src={image.url}
							id={image.image_id}
							width={image.width}
							height={image.height}
							tags={image.tags}
							artistName={'waifu.im'}
							imgSize={image.byte_size}
						/>
					{/if}
				{/each}
			</div>
			<div class="mt-12 w-full flex items-center justify-center">
				<a href="/tags/waifu" class="btn btn-outline btn-primary btn-wide btn-lg">See More</a>
			</div>
		</div>
	</div>
{/if}
