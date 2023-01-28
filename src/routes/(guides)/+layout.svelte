<script>
	import Title from '$lib/title.svelte';
	import '../../styles/global.css';
</script>

<header>
	<Title title="Ninja Gaming" />
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/guides">Guides</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<p>Copyright 2022 Ninja Gaming Guides</p>
</footer>

<style>
	header {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		max-width: 1080px;
		margin: auto;
	}
	nav {
		display: flex;
		justify-content: space-around;
		min-width: 180px;
	}
	main {
		max-width: 1080px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
</style>
