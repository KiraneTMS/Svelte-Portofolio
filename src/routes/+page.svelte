<script>
	import Introduce from './page_components/Introduce.svelte';
	import Title from './page_components/Title.svelte';
	import logo from '$lib/images/Arine-C.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Portofolio" />
	<link rel="icon" type="image/png" href={logo}>
</svelte:head>

<section>
	<!-- <Counter /> -->
		<Title/>
		<Introduce/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	/* h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
	* {
	margin: 0;
	padding: 0;
	}
</style>
