<script>
	import { national } from '$lib/stores/persistent';
</script>

<h1 class="text-4xl font-bold m-12 text-center">CareerQuest</h1>
<div class="grid grid-cols-1 gap-4 sm:grid-cols-3 m-28">
	{#each $national as job}
		<div
			class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex  justify-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
		>
			<!-- <div class="flex-shrink-0">
				<img
					class="h-12 w-12 rounded-full"
					src="https://cdn.abcotvs.com/dip/images/9867267_012121-wpvi-biden-agenda-530am-vid.jpg?w=800&r=16%3A9"
					alt=""
				/>
			</div> -->

			<div class="flex-1 min-w-0">
				<a href="/" class="focus:outline-none">
					<span class="absolute inset-0" aria-hidden="true" />
					<p class="text-xl font-medium text-gray-900">${job.hourly50}/hr</p>
					<p class="text-lg font-medium text-gray-900">{job.title}</p>
					<!-- <p class="text-sm text-gray-500 truncate">{job.jobs.toLocaleString()} Jobs</p> -->
					<br />
					<p class="text-sm text-gray-500">{job.description.split('Excludes')[0]}</p>
				</a>
			</div>
			<div
				class="rounded-full bg-red-400 w-16 h-8 flex justify-center items-center text-white font-bold"
			>
				RARE
			</div>
		</div>
	{/each}
</div>
