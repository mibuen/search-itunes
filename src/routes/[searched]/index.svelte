<script>
	export let songResults;
</script>

<section>
	<div class="grid grid-cols-2 md:grid-cols-3 grod-flow row gap-3 mt-4">
		{#each songResults as song}
			<a
				class="p-3 flex bg-white rounded-md bg-opacity-20 border-2 border-white border-opacity-30"
				sveltekit:prefetch
				href="/searched/{song.trackId}"
			>
				<img src={song.artworkUrl100} alt="img" class="rounded-md mr-4 w-1/4" />
				<div class="flex flex-col items-start text-left">
					<div class="mb-2 h-6 overflow-hidden">{song.trackName}</div>
					<div class="text-xs font-bold">{song.artistName}</div>
				</div>
			</a>
		{/each}
	</div>
</section>
