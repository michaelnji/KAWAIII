<script lang="ts">
	import { createModal } from '@grail-ui/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import Eye from '$lib/components/icons/eye.svelte';
	import User from '$lib/components/icons/user.svelte';
	import Image from './Image.svelte';
	export let src = '';
	// export let views: number = 0;
	export let id: number = 0;
	export let tags: any[] = [];
	export let height: number = 0;
	export let width: number = 0;
	export let artistName: string = '6ixty3rror';
	export let artistTwitter: string = '';
	export let pictureExtension: string = 'jpg';
	export let imgSize: number = 0;
	const { useModal, modalAttrs, titleAttrs, triggerAttrs, open } = createModal({
		portal: null,
		dismissible: true
	});
	$open = false;
</script>

<div class={'rounded-2xl bg-base-200 shadow-2xl flex flex-col overflow-hidden w-full md:h-[700px]'}>
	<div
		class={'overflow-hidden cursor-pointer h-full'}
		on:click={() => {
			$open = true;
		}}
		on:keydown
	>
		<Image {src} alt={''} classes="rounded-t-xl hover:scale-105 transition" />
	</div>
	<div class="p-3 bg-base-200 rounded-2xl">
		<div class=" bg-base-100 rounded-lg p-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-x-2">
					<div class="  font-head text-lg">
						<div
							class="tooltip tooltip-primary flex items-center gap-x-2 font-body"
							data-tip={'Artwork owner'}
						>
							<b class="text-primary"><User /></b>
							<span class="font-head"><a href={artistTwitter} class=" link">@{artistName}</a></span>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-x-2">
					<!-- <button class="btn btn-sm btn-ghost btn-primary !text-primary">
								<Heart />
							</button> -->
					<!-- <div class="flex items-center gap-x-2 font-bold font-head text-lg text-primary">
						<Eye />
						{views}
					</div> -->
				</div>
			</div>
			<div class="divider my-3" />
			<div class="flex items-center gap-2 flex-wrap">
				{#each tags as tag}
					<div class="badge badge-primary font-bold !rounded-md">#{tag.name}</div>
				{/each}
			</div>
		</div>
	</div>
</div>
{#if $open}
	<div
		in:fade
		on:keydown
		on:click|self={() => {
			$open = false;
		}}
		class="fixed z-30 left-0 top-0 w-screen h-screen flex items-center justify-center bg-gray-950 bg-opacity-90 p-8"
	>
		<div
			use:useModal
			{...$modalAttrs}
			in:fly={{ duration: 700, y: 400 }}
			class=" overflow-hidden rounded-3xl md:max-w-2xl w-full flex flex-col md:flex-row relative"
		>
			<Image
				{src}
				alt=""
				classes="md:rounded-tl-3xl md:rounded-bl-3xl !h-full hidden md:inline-block max-h-[32rem]"
			/>
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
				<div class="flex flex-col items-start gap-y-5">
					<div>
						<p class="font-semibold">Artist</p>

						<a href={artistTwitter} class=" link text-primary">{artistName}</a>
					</div>
					<!-- <div>
						<p class="font-semibold">Views</p>

						<p class="text-primary">{views}</p>
					</div> -->
					<div>
						<p class="font-semibold mb-1">Tags</p>
						<div class="flex items-center gap-2 flex-wrap">
							{#each tags as tag}
								<div class="badge badge-primary font-bold !rounded-md">#{tag.name}</div>
							{/each}
						</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Size</p>

						<div class="badge badge-neutral rounded-md font-bold">{imgSize}mb</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Type</p>

						<div class="badge badge-neutral rounded-md font-bold">{pictureExtension}</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Size</p>

						<div class="badge badge-neutral rounded-md font-bold">{height}px * {width}px</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
