<script lang="ts">
	import FeaturedPics from '$lib/components/section/featuredPics.svelte';
	import { formatNum, formatNumCurrency } from '../lib/scripts/numberFunctions';
</script>

<section class="sm:mt-6 mt-2">
	<!-- hero section -->
	<div class="w-full min-h-full place-content-center grid grid-cols-1 place-items-center my-auto">
		<!-- text -->
		<h1 class="font-extrabold text-6xl md:text-7xl lg:text-8xl max-w-7xl text-center font-head">
			Your personal <span class="text-primary">sauce</span> for juicy Waifu pictures
		</h1>
		<p class="mt-3 text-center text-xl max-w-3xl opacity-90">
			Looking for a source of pretty waifu pics? check out our collection of over <b
				class="underline underline-offset-1 text-primary"
				>{formatNum(1000).split('.')[0]}+ saucy images</b
			>
			for the joy of your 👀s
		</p>
		<div class="flex gap-2 mt-8 items-center justify-center flex-wrap !mx-auto">
			<a href="/#all" class="btn btn-wide btn-primary">View images</a>
			<a href="https://github.com/michaelnji/kawaiii" class="btn btn-wide btn-primary btn-outline"
				>github</a
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
<section class="mt-24 w-full pb-12">
	<FeaturedPics />
</section>
