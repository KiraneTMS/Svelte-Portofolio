<script lang="ts">
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import Introduce from './page_components/Introduce.svelte';
	import Title from './page_components/Title.svelte';
	import './styles.css';
	import { onMount } from 'svelte';
  	import '@fortawesome/fontawesome-free/css/all.min.css';

	let theme = "dark";
	let bgColor
	let currentPage: { url: { pathname: string } } | undefined;
	const excludedRoutes = ['/zettai-ryouiki', '/shinsei-no-mon'];

	const unsubscribe = page.subscribe(value => {
		currentPage = value;
	});

	onMount(() => {
		if (!currentPage) return; // Early return if currentPage is undefined
		unsubscribe();
	});
</script>

<div class="app">
	{#if (currentPage && currentPage.url) ?.pathname !== '/zettai-ryouiki' && (currentPage && currentPage.url) ?.pathname !== '/shinsei-no-mon' && currentPage?.url?.pathname !== '/testing-ground'}
		<Header />
	{/if}

	<main>
		<slot />
	</main>

	{#if (currentPage && currentPage.url) ?.pathname !== '/zettai-ryouiki' && (currentPage && currentPage.url) ?.pathname !== '/shinsei-no-mon' && currentPage?.url?.pathname !== '/testing-ground'}
		<footer>
			{console.log('Footer rendering for:', currentPage?.url?.pathname)}
			<div class="container row">
				<div class="footer-col">
					<h4>Pages</h4>
					<ul>
						<li aria-current={currentPage?.url.pathname === '/' ? 'page' : undefined}>
							<a href={currentPage?.url.pathname === '/' ? '/' : '/'}>Home</a>
						</li>
						<li aria-current={currentPage?.url.pathname === '/about' ? 'page' : undefined}>
							<a href={currentPage?.url.pathname === '/about' ? '/about' : '/'}>About Me</a>
						</li>
						<li aria-current={currentPage?.url.pathname === '/portofolio' ? 'page' : undefined}>
							<a href="/portofolio">Portfolio</a>
						</li>
						<li aria-current={currentPage?.url.pathname === '/contact' ? 'page' : undefined}>
							<a href={currentPage?.url.pathname === '/contact' ? '/contact' : '/'}>Contact</a>
						</li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>follow me</h4>
					<div class="social-links">
						<a href="https://www.deviantart.com/arinemir" data-title="DeviantArt"><i class="fa-brands fa-deviantart"></i></a>
						<a href="https://twitter.com/_ArinEmir_" data-title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
						<a href="#" data-title="Instagram"><i class="fa-brands fa-instagram"></i></a>
						<a href="#" data-title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
					</div>
				</div>
			</div>
		</footer>
	{/if}

</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

	.app {
		display: flex;
		flex-direction: column;
		background: #000000;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
	}


	.footer {
		padding: 80px 0;
	}

	.container {
		background-color: rgba(0, 0, 0,.5);
		margin: auto;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
	}

	ul {
		list-style: none;
	}

	.footer-col {
		width: 25%;
		padding: 80px;
	}

	.footer-col h4 {
		font-size: 18px;
		color: #FFF;
		text-transform: capitalize;
		margin-bottom: 35px;
		font-weight: 500;
		position: relative;
	}

	.footer-col h4::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: -10px;
		background-color: #1e6fe9;
		width: 50px;
		height: 2px;
	}

	.footer-col ul li:not(:last-child) {
		margin-bottom: 10px;
	}

	.footer-col ul li a {
		color: #DDD;
		display: block;
		font-size: 1rem;
		font-weight: 300;
		text-transform: capitalize;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.footer-col ul li a:hover {
		color: #FFF;
		padding-left: 7px;
	}

	.footer-col .social-links a {
		color: #FFF;
		background-color: rgba(255, 255, 255, 0.2);
		display: inline-block;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		text-align: center;
		margin: 0 10px 10px 0;
		line-height: 40px;
		transition: all 0.5s ease;
	}

	.footer-col .social-links a:hover {
		color: #151515;
		background-color: #FFF;
	}
	.footer-col .social-links a::after {
		content: attr(data-title);
		position: absolute;
		top: -25px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		visibility: hidden;
		background-color: #333; /* Tooltip background color */
		color: #fff; /* Tooltip text color */
		padding: 5px;
		border-radius: 5px;
		font-size: 12px;
		transition: opacity 0.3s ease-in-out;
	}
	.footer-col .social-links a:hover::after {
		opacity: 1;
		visibility: visible;
	}

	@media(max-width: 767px) {
		.footer-col {
			width: 100%;
			margin-bottom: 30px;
		}
	}

	@media(max-width: 574px) {
		.footer-col {
			width: 100%;
		}
	}
</style>
