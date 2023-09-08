<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import CTASection from './../lib/components/section/CTASection.svelte';
	import MaidSection from './../lib/components/section/maidSection.svelte';
	import FeaturedPics from '$lib/components/section/featuredPics.svelte';
	import OppaiSection from '$lib/components/section/oppaiSection.svelte';
	import { formatNum, formatNumCurrency } from '../lib/scripts/numberFunctions';
	import Footer from '$lib/components/footer.svelte';
	import UniformSection from '$lib/components/section/uniformSection.svelte';
	import WaifuSection from '$lib/components/section/waifuSection.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	export let data: any;
</script>

<MetaTags
	title="Waifu pics"
	titleTemplate="Kawaiii | %s"
	description="Your personal sauce for juicy Waifu pictures"
/>

{#if data === null || (data && data.error)}
	<div class="h-full px-6 w-full overflow-hidden grid place-items-center">
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
	</div>
{:else}
	<section class="sm:mt-6 mt-2 px-6">
		<!-- hero section -->
		<div class="w-full min-h-full place-content-center grid grid-cols-1 place-items-center my-auto">
			<!-- text -->
			<h1 class="font-extrabold text-6xl md:text-7xl lg:text-8xl max-w-7xl text-center font-head">
				Your personal <span class="text-primary">sauce</span> for juicy Waifu pictures
			</h1>
			<p class="mt-3 text-center text-xl max-w-3xl opacity-90">
				Looking for a source of pretty waifu pics? check out our collection of over <b
					class="underline underline-offset-1 text-primary"
					>{formatNum(
						parseInt(
							data.oppai.length + data.marin.length + data.uniform.length + data.maid.length
						) + 500
					)}+ saucy images</b
				>
				for the joy of your 👀s
			</p>
			<div class="flex gap-2 mt-8 items-center justify-center flex-wrap !mx-auto">
				<a href="/#all" class="btn btn-primary">View images</a>
				<a
					href="https://github.com/michaelnji/kawaiii"
					class="btn btn-primary btn-outline"
					target="_blank">github repo</a
				>
			</div>
		</div>
	</section>
	<div class="mx-auto md:mt-28 mt-16 flex items-center justify-center">
		<div class="animate-bounce duration-1000">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
				><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><g id="SVGRepo_iconCarrier">
					<path
						d="M12 20L18 14M12 20L6 14M12 20L12 9.5M12 4V6.5"
						stroke="#f472b6"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g></svg
			>
		</div>
	</div>

	<!-- featured waifu pics -->
	<section id="all" class="mt-24 px-6 w-full pb-12">
		<WaifuSection imageData={data.waifu} />
	</section>

	<!-- featured waifu pics -->
	<section class="mt-24 px-6 w-full pb-12">
		<FeaturedPics imageData={data.marin} />
	</section>

	<!-- oppai waifu pics -->
	<section class="mt-24 px-6 w-full pb-12">
		<OppaiSection imageData={data.oppai} />
	</section>

	<!-- maid waifu pics -->
	<section class="mt-24 px-6 w-full pb-12">
		<MaidSection imageData={data.maid} />
	</section>

	<!-- selfies waifu pics -->
	<section class="mt-24 px-6 w-full pb-12">
		<UniformSection imageData={data.uniform} />
	</section>

	<!-- cta waifu pics -->
	<section class="mt-24 px-6 w-full pb-12">
		<CTASection />
	</section>

	<!-- footers -->
	<section class="mt-24 w-full">
		<Footer />
	</section>
{/if}
