<script>
	let title = 'Ninja Gaming Guides';

	const updateTitle = () => {
		title = 'Something completely different!';
	};
</script>

<div class="index">
	<h2>{title}</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa voluptatum illo cum
		assumenda ipsa quisquam sunt suscipit maiores, placeat quo, quas aut aperiam laboriosam
		voluptatibus nam eum quis repellat!
	</p>
	<button on:click={updateTitle}>Change title</button>
	<input type="text" bind:value={title} />
</div>

<style>
	.index {
		text-align: center;
		margin: 20px auto;
	}
</style>
