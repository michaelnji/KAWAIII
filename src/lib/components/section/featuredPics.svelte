<script lang="ts">
	import i from '$lib/images/test/1690196111627_x16.png';
	import j from '$lib/images/test/7d4482f0-0e18-11ee-a4ec-3b927a24c134_x16_drawing.jpg';
	import k from '$lib/images/test/anya_wpx_x16_drawing.jpg';
	import n from '$lib/images/test/sub_x16_drawing.jpg';
	import m from '$lib/images/test/girlgothic_x16_drawing.jpg';
	import l from '$lib/images/test/fee5ef984b57d831180b186528a5047e_x16_drawing.jpg';

	import PictureHolder from '../pictureHolder.svelte';
</script>

<div class="w-full">
	<div class="w-full">
		<div class="w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<PictureHolder src={k} artistName="Myk3c1phor4" views={3000} />
			<PictureHolder src={j} artistName="resture" views={35600} />
			<PictureHolder src={n} artistName="dexcky_" views={609} />
			<PictureHolder src={l} artistName="mar1n" views={609} />
			<PictureHolder src={j} artistName="_uggah" views={35600} />
			<PictureHolder src={m} artistName="5iftyweeks" views={3000} />
		</div>
		<div class="mx-auto mt-12 w-full flex items-center justify-center">
			<button class="btn btn-outline btn-primary btn-wide btn-lg">Load More</button>
		</div>
	</div>
</div>
