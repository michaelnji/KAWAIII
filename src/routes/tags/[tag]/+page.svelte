<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import CTASection from './../../../lib/components/section/CTASection.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { getImagesByTagClient } from '$lib/scripts/api/data/images';
	import { onMount } from 'svelte';
	import PictureHolder from '$lib/components/pictureHolder.svelte';
	import LoadingIcon from '$lib/components/loadingIcon.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { isArray } from 'mathjs';
	import { MetaTags } from 'svelte-meta-tags';
	let imageData: any;
	let isLoading: boolean = false;
	export let data: any;
	$: currentTag = $page.url.pathname.split('/tags/')[1];
	imageData = data.info;
	function uniqueArray4(a: any) {
		return [...new Set(a)];
	}
	async function getData(): Promise<void> {
		isLoading = true;
		const data = await getImagesByTagClient(currentTag);
		// if (isArray(data) && isArray(imageData) && data[0].signature !== imageData[0].signature) {
		// 	imageData = [...uniqueArray4([...imageData, ...data])];
		// 	isLoading = false;
		// 	console.log([...uniqueArray4([...imageData, ...data])][0]);
		// 	return;
		// }
		imageData = data;
		isLoading = false;
	}
</script>

{#if data && !data.error}
	<MetaTags
		title={currentTag}
		titleTemplate="Kawaiii - tags | %s"
		description={imageData[0].tags[0].description}
	/>
{:else}
	<MetaTags title={currentTag} titleTemplate="Kawaiii | %s" />
{/if}
<section class="sm:mt-6 mt-2 px-6 w-full mb-24">
	<h1 class="font-extrabold text-5xl font-head text-primary md:text-7xl lg:text-8xl text-center">
		#{currentTag}{#key isArray(imageData)}
			{#if isArray(imageData)}
				<small class="text-xl">({imageData.length})</small>
			{/if}
		{/key}
	</h1>
	<div class="w-full mt-12">
		<div class="w-full">
			{#key isArray(imageData)}
				{#if isArray(imageData) && !isLoading}
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
									height={image.height}
									width={image.width}
								/>
							{:else}
								<PictureHolder
									src={image.url}
									id={image.image_id}
									tags={image.tags}
									artistName={'waifu.im'}
									imgSize={image.byte_size}
									height={image.height}
									width={image.width}
								/>
							{/if}
						{/each}
					</div>
				{:else if isLoading}
					<div class="w-full h-full min-h-[10rem] grid place-items-center">
						<LoadingIcon />
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
			{/key}
		</div>
	</div>
	<button
		on:click={getData}
		class="btn btn-primary btn-lg shadow-lg shadow-primary !btn-square rounded-full fixed bottom-4 !right-8"
	>
		{#if isLoading}
			<div class="loading loading-lg" />
		{:else}
			<svg
				height="40px"
				width="40px"
				version="1.1"
				id="_x32_"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 512 512"
				xml:space="preserve"
				fill="#000000"
				><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><g id="SVGRepo_iconCarrier">
					<style type="text/css">
						.st0 {
							fill: #000000;
						}
					</style>
					<g>
						<path
							class="st0"
							d="M268.149,12.153c-7.179,0-14.309,0.309-21.374,0.926l4.905,56.561h0.016 c5.392-0.462,10.882-0.698,16.453-0.698c51.745,0.016,98.326,20.886,132.272,54.782c33.896,33.954,54.783,80.534,54.783,132.28 c0,51.745-20.887,98.326-54.783,132.271c-33.945,33.896-80.526,54.767-132.272,54.783c-51.746-0.016-98.326-20.886-132.272-54.783 c-18.239-18.264-32.532-40.279-42.017-64.699l31.102-4.376L44.729,201.952l-17.93,54.052h-2.485c0,2.192,0.26,4.32,0.325,6.505 L0,336.765l36.414-5.116c31.85,97.611,123.485,168.189,231.735,168.197C402.84,499.839,511.984,390.688,512,256.004 C511.984,121.313,402.84,12.161,268.149,12.153z"
						/>
						<path
							class="st0"
							d="M113.041,151.425c3.054-4.532,6.335-8.941,9.794-13.237l-44.144-35.707 c-4.466,5.522-8.722,11.23-12.717,17.167l47.052,31.777H113.041z"
						/>
						<path
							class="st0"
							d="M193.762,84.314c9.079-3.938,18.532-7.17,28.292-9.648L208.12,19.607c-12.766,3.232-25.11,7.472-36.966,12.62 l22.609,52.078V84.314z"
						/>
						<path
							class="st0"
							d="M167.353,98.412l-30.664-47.807c-10.996,7.041-21.374,14.95-31.054,23.615l37.86,42.318 C150.933,109.887,158.908,103.812,167.353,98.412z"
						/>
					</g>
				</g></svg
			>
		{/if}
	</button>
</section>

{#if !isLoading}
	<!-- cta waifu pics -->
	<section class="my-24 px-6 w-full pb-12">
		<CTASection />
	</section>
{/if}

<!-- footers -->
<section class="w-full">
	<Footer />
</section>
