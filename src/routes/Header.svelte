<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/Arine-W.png';
	import github from '$lib/images/github.svg';

	let isActive = true;
	let isAffixed = false;

	// if (window.scrollY > 0) {
	// 	isAffixed = true;
	// } else {
	// 	isAffixed = false;
	// }
	function toggleMenu() {
		console.log("Before toggle: isActive =", isActive); // Log current state
		isActive = !isActive;
		console.log("After toggle: isActive =", isActive); // Log updated state
	}
</script>

<header>
	<nav class={isAffixed ? 'nav' : 'nav affixed'}>
		<div class="container">
		  <div class="logo">
			<div class="logo-container no-hover"><a href="/"><img src={logo}></a></div>
		  </div>
		  <div id="mainListDiv" class={isActive ? 'main_list' : 'main_list show_list'}>
			<ul class="navlinks">
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname === '/portofolio' ? 'page' : undefined}>
					<a href="/portofolio">Portfolio</a>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		  </div>		  
		  <span class={isActive ? 'navTrigger' : 'navTrigger active'} on:click={toggleMenu}>
			<i></i>
			<i></i>
			<i></i>
		  </span>
		</div>
	  </nav>
</header>

<style>
	.logo .logo-container img {
		width: 1.7em;
		height: 1.7em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	.nav {
		width: 100%;
		height: 65px;
		position: fixed;
		line-height: 65px;
		text-align: center;
		z-index: 4;
	}

	.nav div.logo {
		float: left;
		width: auto;
		height: auto;
		padding-left: 3rem;
	}

	.nav div.logo a {
		text-decoration: none;
		color: #fff;
		font-size: 2.5rem;
	}

	.nav div.main_list {
		height: 65px;
		float: right;
	}

	.nav div.main_list ul {
		width: 100%;
		height: 65px;
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav div.main_list ul li {
		width: auto;
		height: 65px;
		padding: 0;
		padding-right: 3rem;
	}

	.nav div.main_list ul li a {
		text-decoration: none;
		color: #ffffff;
		line-height: 65px;
		font-size: 2.4rem;
		text-shadow: 0 0 0 transparent, 0 0 5px #f5f5f5;
	}

	.nav div.main_list ul li a:hover::before,
	.nav div.main_list ul li a:hover::after {
	content: ""; /* Empty content for pseudo-elements */
	display: inline-block; /* Ensures text behaves inline */
	}
	.nav div.main_list ul li a:hover::before {
	content: "-"; /* Text to add before */
	color: white; /* Example color */
	}

	.nav div.main_list ul li a:hover::after {
	content: "-"; /* Text to add after */
	color: white; /* Example color */
	}
	.navTrigger {
		display: none;
	}

	.nav {
		padding-top: 20px;
		padding-bottom: 20px;
		-webkit-transition: all 0.4s ease;
		transition: all 0.4s ease;
	}


	/* Media qurey section */

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.container {
			margin: 0;
		}
	}

	@media screen and (max-width:768px) {
		.navTrigger {
			display: block;
		}
		.nav div.logo {
			margin-left: 15px;
		}
		.nav div.main_list {
			width: 100%;
			height: 0;
			overflow: hidden;
			filter: blur(5px);
		}
		.nav div.show_list {
			height: auto;
			display: contents;
		}
		.nav div.main_list ul {
			flex-direction: column;
			width: 100%;
			height: 100vh;
			right: 0;
			left: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0,.5);
			/*same background color of navbar*/
			background-position: center top;
		}
		.nav div.main_list ul li {
			width: 100%;
			text-align: right;
		}
		.nav div.show_list ul li {
			width: 100%;
			text-align: right;
			/* border-bottom: 1px solid #ccc; */
		}
		.nav div.main_list ul li a {
			text-align: center;
			width: 100%;
			font-size: 3rem;
			padding: 20px;
		}
		.nav div.media_button {
			display: block;
		}
	}
	
	.affixed {
		padding: 0;
		background-color: rgba(0, 0, 0,.5);
	}

	.myH2 {
		text-align:center;
		font-size: 4rem;
	}
	.myP {
		text-align: justify;
		padding-left:15%;
		padding-right:15%;
		font-size: 20px;
	}


	/* Animation */
	/* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */

	.navTrigger {
		cursor: pointer;
		width: 30px;
		height: 25px;
		margin: auto;
		position: absolute;
		right: 30px;
		top: 0;
		bottom: 0;
	}

	.navTrigger i {
		background-color: #fff;
		border-radius: 2px;
		content: '';
		display: block;
		width: 100%;
		height: 4px;
	}

	.navTrigger i:nth-child(1) {
		-webkit-animation: outT 0.8s backwards;
		animation: outT 0.8s backwards;
		-webkit-animation-direction: reverse;
		animation-direction: reverse;
	}

	.navTrigger i:nth-child(2) {
		margin: 5px 0;
		-webkit-animation: outM 0.8s backwards;
		animation: outM 0.8s backwards;
		-webkit-animation-direction: reverse;
		animation-direction: reverse;
	}

	.navTrigger i:nth-child(3) {
		-webkit-animation: outBtm 0.8s backwards;
		animation: outBtm 0.8s backwards;
		-webkit-animation-direction: reverse;
		animation-direction: reverse;
	}

	.navTrigger.active i:nth-child(1) {
		-webkit-animation: inT 0.8s forwards;
		animation: inT 0.8s forwards;
	}

	.navTrigger.active i:nth-child(2) {
		-webkit-animation: inM 0.8s forwards;
		animation: inM 0.8s forwards;
	}

	.navTrigger.active i:nth-child(3) {
		-webkit-animation: inBtm 0.8s forwards;
		animation: inBtm 0.8s forwards;
	}

	@-webkit-keyframes inM {
		50% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(45deg);
		}
	}

	@keyframes inM {
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(45deg);
		}
	}

	@-webkit-keyframes outM {
		50% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(45deg);
		}
	}

	@keyframes outM {
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(45deg);
		}
	}

	@-webkit-keyframes inT {
		0% {
			-webkit-transform: translateY(0px) rotate(0deg);
		}
		50% {
			-webkit-transform: translateY(9px) rotate(0deg);
		}
		100% {
			-webkit-transform: translateY(9px) rotate(135deg);
		}
	}

	@keyframes inT {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(9px) rotate(0deg);
		}
		100% {
			transform: translateY(9px) rotate(135deg);
		}
	}

	@-webkit-keyframes outT {
		0% {
			-webkit-transform: translateY(0px) rotate(0deg);
		}
		50% {
			-webkit-transform: translateY(9px) rotate(0deg);
		}
		100% {
			-webkit-transform: translateY(9px) rotate(135deg);
		}
	}

	@keyframes outT {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(9px) rotate(0deg);
		}
		100% {
			transform: translateY(9px) rotate(135deg);
		}
	}

	@-webkit-keyframes inBtm {
		0% {
			-webkit-transform: translateY(0px) rotate(0deg);
		}
		50% {
			-webkit-transform: translateY(-9px) rotate(0deg);
		}
		100% {
			-webkit-transform: translateY(-9px) rotate(135deg);
		}
	}

	@keyframes inBtm {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-9px) rotate(0deg);
		}
		100% {
			transform: translateY(-9px) rotate(135deg);
		}
	}

	@-webkit-keyframes outBtm {
		0% {
			-webkit-transform: translateY(0px) rotate(0deg);
		}
		50% {
			-webkit-transform: translateY(-9px) rotate(0deg);
		}
		100% {
			-webkit-transform: translateY(-9px) rotate(135deg);
		}
	}

	@keyframes outBtm {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-9px) rotate(0deg);
		}
		100% {
			transform: translateY(-9px) rotate(135deg);
		}
	}

	@media all and (max-width:700px){
		.myP {
			padding:2%;
		}
	}
</style>
