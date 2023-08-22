<script lang="ts">
	import { createModal } from '@grail-ui/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import Eye from '$lib/components/icons/eye.svelte';
	import User from '$lib/components/icons/user.svelte';
	import Image from './Image.svelte';
	export let src = '';
	export let views: number = 0;
	export let artistName: string = '6ixty3rror';

	const { useModal, modalAttrs, titleAttrs, triggerAttrs, open } = createModal({
		portal: null,
		dismissible: true
	});
	$open = false;
</script>

<div class="rounded-2xl bg-base-200 shadow-2xl flex flex-col overflow-hidden">
	<div
		class="overflow-hidden cursor-pointer"
		on:click={() => {
			$open = true;
		}}
		on:keydown
	>
		<Image
			{src}
			alt="kawaiii"
			classes="rounded-t-xl hover:scale-105 duration-500 ease-out transition"
		/>
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
							<span class="font-head">@{artistName}</span>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-x-2">
					<!-- <button class="btn btn-sm btn-ghost btn-primary !text-primary">
								<Heart />
							</button> -->
					<div class="flex items-center gap-x-2 font-bold font-head text-lg text-primary">
						<Eye />
						{views}
					</div>
				</div>
			</div>
			<div class="divider my-3" />
			<div class="flex items-center gap-2 flex-wrap">
				<div class="badge badge-primary font-bold !rounded-md">#waifu</div>
				<div class="badge badge-primary font-bold !rounded-md">#maid</div>
				<div class="badge badge-primary font-bold !rounded-md">#rent-a-girlfriend</div>
			</div>
		</div>
	</div>
</div>
{#if $open}
	<div
		in:fade
		on:keydown
		on:click={() => {
			$open = false;
		}}
		class="fixed z-30 left-0 top-0 w-screen h-screen flex items-center justify-center bg-gray-950 bg-opacity-90 p-8"
	>
		<div
			use:useModal
			{...$modalAttrs}
			in:fly={{ duration: 700, y: 400 }}
			class=" overflow-hidden rounded-3xl md:max-w-2xl md:w-full flex flex-col md:flex-row relative"
		>
			<img
				{src}
				alt="kawaiii"
				class="md:rounded-tl-3xl md:rounded-bl-3xl hover:scale-105 duration-500 ease-out h-full hidden md:inline-block max-h-[32rem] transition"
			/>
			<div class="p-6 rounded-tr-3xl rounded-br-3xl md:w-full max-w-max bg-base-100">
				<div class="w-full flex items-center justify-between">
					<div class="badge badge-primary rounded-md font-bold">waifu.im</div>
					<button
						class="btn btn-ghost font-head btn-sm btn-square text-xl"
						{...$triggerAttrs}
						on:click={() => {
							$open = false;
						}}>X</button
					>
				</div>

				<h2 {...$titleAttrs} class="font-head text-3xl font-bold mt-2">
					kawaiii<span class="text-primary">#1232</span>
				</h2>
				<div class="my-2 divider" />
				<div class="flex flex-col items-start gap-y-5">
					<div>
						<p class="font-semibold">Artist</p>

						<a href="/" class=" link text-primary">{artistName}</a>
					</div>
					<div>
						<p class="font-semibold">Views</p>

						<p class="text-primary">{views}</p>
					</div>
					<div>
						<p class="font-semibold mb-1">Tags</p>
						<div class="flex items-center gap-2 flex-wrap">
							<div class="badge badge-primary font-bold !rounded-md">#waifu</div>
							<div class="badge badge-primary font-bold !rounded-md">#maid</div>
							<div class="badge badge-primary font-bold !rounded-md">#rent-a-girlfriend</div>
						</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Type</p>

						<div class="badge badge-neutral rounded-md font-bold">JPEG</div>
					</div>
					<div>
						<p class="font-semibold mb-1">Size</p>

						<div class="badge badge-neutral rounded-md font-bold">2000px * 1024px</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
