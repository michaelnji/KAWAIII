<script>
	import i from '$lib/images/LOGO.png';
	import Github from '../icons/github.svelte';
</script>

<div class="w-full max-w-5xl mx-auto rounded-3xl bg-base-100 flex gap-x-3">
	<img src={i} alt="kawaiii logo" class="hidden md:inline-block" />
	<div class="p-6">
		<h1 class="text-4xl text-center md:text-left font-bold">Want to contribute?</h1>
		<p class="text-lg text-center md:text-left mt-2 md:text-xl font-medium">
			Have a <b class="text-primary">juicy suggestion?</b> Seen a <b class="text-error">bug?</b> kawaiii
			is an open source project so fork the repo and get coding!
		</p>
		<a
			href="https://github.com/michaelnji/kawaiii"
			class="btn mt-4 w-full md:w-max flex items-center gap-x-2"
		>
			<Github /> GITHUB
		</a>
	</div>
</div>
