<script lang="ts">
	import { page } from '$app/stores';
	import Github from './icons/github.svelte';
	import i from '$lib/images/LOGO.png';
	let currentString: string;
	$: currentString = $page.url.pathname;
</script>

<div class="navbar bg-base-100 fixed z-20 top-0 left-0">
	<div class="navbar-start">
		<div class="dropdown">
			<span tabindex="-1" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</span>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a
						href="/"
						class="font-medium"
						class:bg-primary={currentString === '/'}
						class:bg-opacity-30={currentString === '/'}
						class:text-primary={currentString === '/'}>Home</a
					>
				</li>
				<li>
					<a href="/">Tags</a>
					<ul class="p-2">
						<li>
							<a
								href="/"
								class="font-medium"
								class:bg-primary={currentString === '/tags/'}
								class:bg-opacity-30={currentString === '/tags/'}
								class:text-primary={currentString === '/tags/'}>waifu</a
							>
						</li>
						<li>
							<a
								href="/"
								class="font-medium"
								class:bg-primary={currentString === '/tags/'}
								class:bg-opacity-30={currentString === '/tags/'}
								class:text-primary={currentString === '/tags/'}>otaku</a
							>
						</li>
					</ul>
				</li>
				<li>
					<a
						href="/about"
						class="font-medium"
						class:bg-primary={currentString === '/about'}
						class:bg-opacity-30={currentString === '/about'}
						class:text-primary={currentString === '/about'}>About</a
					>
				</li>
			</ul>
		</div>
		<a href="/" class=" h-[28px] w-[28px]">
			<img src={i} alt="kawaiii logo" />
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 lg:space-x-2">
			<li>
				<a
					href="/"
					class="font-medium"
					class:bg-primary={currentString === '/'}
					class:bg-opacity-30={currentString === '/'}
					class:text-primary={currentString === '/'}>Home</a
				>
			</li>
			<li tabindex="-1">
				<details>
					<summary>Tags</summary>
					<ul class="p-3 space-y-2">
						<li>
							<a
								href="/"
								class="font-medium"
								class:bg-primary={currentString === '/tags/'}
								class:bg-opacity-30={currentString === '/tags/'}
								class:text-primary={currentString === '/tags/'}>waifu</a
							>
						</li>
						<li>
							<a
								href="/"
								class="font-medium"
								class:bg-primary={currentString === '/tags/'}
								class:bg-opacity-30={currentString === '/tags/'}
								class:text-primary={currentString === '/tags/'}>otaku</a
							>
						</li>
					</ul>
				</details>
			</li>
			<li>
				<a
					href="/about"
					class="font-medium"
					class:bg-primary={currentString === '/about'}
					class:bg-opacity-30={currentString === '/about'}
					class:text-primary={currentString === '/about'}>About</a
				>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="https://github.com/michaelnji/kawaiii" class="btn bg-black !text-white"><Github /></a>
	</div>
</div>
