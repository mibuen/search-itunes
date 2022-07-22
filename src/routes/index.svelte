<script>
	import { goto } from '$app/navigation';
	let searched = '';
	function search() {
		return goto(`${searched}`);
	}
</script>

<section>
	<div class="flex flex-col items-center">
		<div class="text-5xl text-center text-white font-semibold mb-12">Search an Artist</div>
		<div
			class="w-full flex space-x-2 rounded-md bg-white bg-opacity-20 p-1 border border-white border-opacity-30"
		>
			<input
				on:change={search}
				class=" pl-4 w-4/5 bg-transparent text-white"
				type="text"
				bind:value={searched}
			/>
			<button class="w-1/5 p-2 rounded-md bg-white font-medium" on:click={search}>Search</button>
		</div>
	</div>
</section>
