<script>
	import i from '$lib/images/tailwindcss-icon.svg';
	import ts from '$lib/images/typescript.svg';
	import sv from '$lib/images/svelte.svg';
	import h from '$lib/images/heart.svg';
	import CtaSection from '$lib/components/section/CTASection.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<section class="mt-8 px-6">
	<h1 class="text-3xl md:text-5xl font-head font-bold text-center">
		About <span class="text-primary">Kawaiii</span>
	</h1>
	<p class="mt-4 text-md md:text-lg lg:text-xl text-center max-w-5xl mx-auto">
		Kawaiii is a side project developed by <a href="https://github.com/michaelnji" class="link"
			>@michaelnji</a
		>
		as a way to sharpen his web development skills in a fun and entertaining way. It is a site that displays
		pictures of <b class="text-primary font-head">waifus</b>, and brief information about the
		artists. Kawaiii is built for fun purposes only and is not intended to portray any kind of
		behavior.
	</p>
</section>
<section class="mt-16 px-6">
	<h1 class="text-3xl md:text-5xl font-head font-bold text-center">
		This Project <span class="text-primary">Uses</span>
	</h1>
	<div class="!mx-auto mt-8 w-full max-w-3xl justify-center flex-wrap flex items-center gap-3">
		<div class="rounded-2xl bg-base-200 p-3">
			<img src={i} alt="tailwindcss" />
		</div>
		<div class="rounded-2xl bg-base-200 p-3">
			<img src={ts} alt="typescript" />
		</div>
		<div class="rounded-2xl bg-base-200 p-3">
			<img src={sv} alt="svelte" />
		</div>
		<div class="rounded-2xl text-primary bg-base-200 p-3">
			<img src={h} alt="HEART" />
		</div>
	</div>
</section>
<!-- cta waifu pics -->
<section class="mt-24 px-6 w-full pb-12">
	<CtaSection />
</section>

<!-- footers -->
<section class="mt-24 w-full">
	<Footer />
</section>
