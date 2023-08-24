<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Github from './icons/github.svelte';
	import i from '$lib/images/LOGO.png';
	import { getTagsClient } from '$lib/scripts/api/data/images';
	import { isArray } from 'mathjs';
	let currentString: string;
	$: currentString = $page.url.pathname;
	let isLoading: boolean = false;
	let tags: any = [];
	const getNavTags = async () => {
		if (tags.length == 0) {
			isLoading = true;
			const tagData = await getTagsClient();
			tags = tagData;
			isLoading = false;
		}
	};
</script>

<div class="navbar bg-base-100 fixed z-20 top-0 left-0">
	<div class="navbar-start">
		<div class="dropdown">
			<button tabindex="-1" class="btn btn-ghost btn-sm mr-2 lg:hidden" on:click={getNavTags}>
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
			</button>
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
					<span class="hover:bg-transparent !cursor-default">Tags</span>
					<ul class="p-2">
						{#if isLoading}
							<div class="loading-spinner loading loading-sm" />
						{:else if isArray(tags)}
							{#each tags as tag}
								<li in:fade>
									<a
										href={`/tags/${tag}`}
										class="font-medium"
										class:bg-primary={currentString === `/tags/${tag}`}
										class:bg-opacity-30={currentString === `/tags/${tag}`}
										class:text-primary={currentString === `/tags/${tag}`}>{tag}</a
									>
								</li>
							{/each}
						{:else}
							<li class="p-2 rounded bg-error text-error bg-opacity-10 font-semibold">
								error occurred
							</li>
						{/if}
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

			<div class="dropdown dropdown-bottom">
				<li class="p-0">
					<span tabindex="-1" on:click={getNavTags} on:keydown class="font-medium w-full h-full">
						Tags</span
					>
					<ul class="p-3 space-y-2 dropdown-content bg-base-100 !min-w-[13rem] rounded-md">
						{#if isLoading}
							<li class="flex justify-center items-center">
								<div class="loading-spinner loading loading-xs" />
							</li>
						{:else if isArray(tags)}
							{#each tags as tag}
								<li>
									<a
										href={`/tags/${tag}`}
										class="font-medium capitalize"
										class:bg-primary={currentString === `/tags/${tag}`}
										class:bg-opacity-30={currentString === `/tags/${tag}`}
										class:text-primary={currentString === `/tags/${tag}`}>{tag}</a
									>
								</li>
							{/each}
						{:else}
							<li class="p-2 rounded bg-error text-error bg-opacity-10 font-semibold">
								error occurred
							</li>
						{/if}
					</ul>
				</li>
			</div>
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
