<script lang="ts">
	import { createModal } from '@grail-ui/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import Eye from '$lib/components/icons/eye.svelte';
	import User from '$lib/components/icons/user.svelte';
	import Image from './Image.svelte';
	import { random, round } from 'mathjs';
	export let src = '';
	// export let views: number = 0;
	export let id: number;
	export let tags: any[] = ['waifu'];
	export let height: number;
	export let width: number;
	export let artistName: string = 'waifu.pics';
	export let artistTwitter: string = '';
	export let pictureExtension: string = 'jpg';
	export let imgSize: number = 0.9;
	const { useModal, modalAttrs, titleAttrs, triggerAttrs, open } = createModal({
		portal: null,
		dismissible: false
	});
	$open = false;
	let disableImg = true;
</script>

<div
	class={'rounded-2xl bg-base-200 shadow-2xl flex flex-col overflow-hidden w-full min-h-[700px] md:max-h-[700px] h-full'}
>
	<div
		class={'overflow-hidden cursor-pointer h-full'}
		on:click={() => {
			if (!disableImg) $open = true;
		}}
		on:keydown
	>
		<Image
			{src}
			alt={''}
			classes="rounded-t-xl hover:scale-105 transition"
			on:loadedImg={() => {
				disableImg = false;
			}}
		/>
	</div>
	<div class="p-3 bg-base-200 rounded-2xl">
		<div class=" bg-base-100 rounded-lg p-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-x-2 justify-between w-full">
					<div class="  font-head text-lg">
						<div
							class="tooltip tooltip-primary flex items-center gap-x-2 font-body"
							data-tip={'Artwork owner'}
						>
							<b class="text-primary text-sm">By</b>
							<span class="text-sm md:text-lg font-medium"
								><a href={artistTwitter} class="link">{artistName}</a></span
							>
						</div>
					</div>
					<span class="text-primary font-bold italic">#{id}</span>
				</div>
				<!-- <div class="flex items-center gap-x-2">
					<div class="flex items-center gap-x-2 font-bold font-head text-sm  text-primary">
						<Eye />
						{200}
					</div>
				</div> -->
			</div>
			<div class="divider my-1" />
			<div class="flex items-center gap-2 flex-wrap">
				{#each tags as tag, i}
					{#if i === tags.length - 1 && tags.length > 2}
						<div class="badge badge-primary font-bold !rounded-md">
							# <a href={`/tags/${tag.name}`}>{tag.name}</a>
						</div>
					{:else}
						<div class="badge badge-primary font-bold !rounded-md">
							# <a href={`/tags/${tag.name}`}>{tag.name}</a>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
{#if $open}
	<div
		in:fade
		class="fixed z-30 left-0 top-0 w-screen h-screen flex items-center justify-center bg-gray-950 bg-opacity-90 p-8"
	>
		<div
			use:useModal
			{...$modalAttrs}
			in:fly={{ duration: 700, y: 400 }}
			class=" overflow-hidden rounded-3xl md:max-w-[55rem] w-full grid grid-cols-1 md:grid-cols-2 relative"
		>
			<img {src} alt="" class="md:rounded-tl-3xl md:rounded-bl-3xl hidden md:inline-block" />
			<div class="p-6 rounded-tr-3xl rounded-br-3xl w-full bg-base-100">
				<div class="w-full flex items-center justify-between">
					<div class="badge badge-primary rounded-md font-bold">waifu.im</div>
					<button
						class="btn btn-ghost font-head btn-xs btn-square text-xl"
						{...$triggerAttrs}
						on:click={() => {
							$open = false;
						}}>X</button
					>
				</div>

				<h2 {...$titleAttrs} class="font-head text-2xl font-bold mt-2">
					kawaiii<span class="text-primary">#{id}</span>
				</h2>
				<div class="my-2 divider" />
				<div class="flex flex-col items-start gap-5">
					<div>
						<p class="font-semibold">Artist</p>

						<a href={artistTwitter} class=" link text-primary">{artistName}</a>
					</div>
					<!-- <div>
						<p class="font-semibold">Views</p>

						<p class="text-primary">{views}</p>
					</div> -->
					<div class="w-full">
						<p class="font-semibold mb-1">Tags</p>
						<div class="flex items-center gap-2 flex-wrap">
							{#each tags as tag}
								<div class="tooltip tooltip-primary font-body" data-tip={tag.description}>
									<div class="badge badge-primary font-bold !rounded-md">#{tag.name}</div>
								</div>
							{/each}
						</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Size</p>

						<div class="badge badge-neutral rounded-md font-bold">
							{round(imgSize / 1024 / 1024, 2)}mb
						</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Type</p>

						<div class="badge badge-neutral rounded-md font-bold">{pictureExtension}</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Dimensions</p>

						<div class="badge badge-neutral rounded-md font-bold">{height}px * {width}px</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
