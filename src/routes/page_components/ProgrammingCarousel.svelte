<!-- Wiper.svelte -->
<script lang="ts">
	import { onMount } from "svelte";
	import Skills from './Skills.svelte';
  	import jsonData from '../../lib/json/skillsDatas.json';
  
	let wiperTrack: HTMLElement | null;
	let wipes: HTMLElement[];
	let wipePrevBtn: HTMLElement | null;
	let wipeNextBtn: HTMLElement | null;
	let wipeWidth: number;

	
	let data = jsonData;

    let sortedData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
        key,
        value.sort((a, b) => a.title.localeCompare(b.title))
    ])
    );
	// ...

	onMount(() => {
	wiperTrack = document.querySelector(".wiper-track");
	if (wiperTrack) {
		wipes = Array.from(wiperTrack.children) as HTMLElement[];
		wipeWidth = wipes[0].getBoundingClientRect().width;
	}

	wipePrevBtn = document.querySelector(".wiper-button__right-0");
	wipeNextBtn = document.querySelector(".wiper-button__left-0");
	wipeWidth = wipes[0].getBoundingClientRect().width;
	});
  
	const arrowsBehaviour = (index: number) => {
	  if (index === 0) {
		wipePrevBtn?.classList.add("is-hidden-0");
		wipeNextBtn?.classList.remove("is-hidden-0");
	  } else if (index === wipes.length - 1) {
		wipePrevBtn?.classList.remove("is-hidden-0");
		wipeNextBtn?.classList.add("is-hidden-0");
	  } else {
		wipePrevBtn?.classList.remove("is-hidden-0");
		wipeNextBtn?.classList.remove("is-hidden-0");
	  }
	};
  
	const wipeSlide = (
	activeSlide: HTMLElement,
	nextSlide: HTMLElement,
	targetIndex: number
	): void => {
	if (wiperTrack) {
		wiperTrack.style.transform =
		"translateX(-" + (wipeWidth + 24) * (targetIndex - 1) + "px)";
	}
	activeSlide.classList.remove("active-swipe-0");
	activeSlide.style.transform = "scale(1)";
	nextSlide.classList.add("active-swipe-0");
	nextSlide.style.transform = "scale(1.1)";
	};
  
	const handleNextClick = () => {
		const activeSlide = wiperTrack?.querySelector(".active-swipe-0") as HTMLElement;
		const nextSlide = activeSlide?.nextElementSibling as HTMLElement;
		
		if (activeSlide && nextSlide) {
			const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
			wipeSlide(activeSlide, nextSlide, targetIndex);
			arrowsBehaviour(targetIndex);
		}
	};

	const handlePrevClick = () => {
	const activeSlide = wiperTrack?.querySelector(".active-swipe-0") as HTMLElement;
	const nextSlide = activeSlide?.previousElementSibling as HTMLElement;

	if (activeSlide && nextSlide) {
		const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
		wipeSlide(activeSlide, nextSlide, targetIndex);
		arrowsBehaviour(targetIndex);
	}
	};

  </script>
  
  <style>
	/* Add your styles here */
	.wiper-track {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: 1.5rem;
	margin: 0 auto;
	transition: transform 0.4s ease-in;
	padding: 0 1rem;
	}
	.wiper-item {
	width: 200px;
	height: 300px;
	position: relative;
	transition: scale 0.2s linear;

	}
	.wiper-button img {
	height: 100%;
	width: 100%;
	object-fit:cover;
	}
	.wiper {
	max-width: 1200px;
	position: relative;
	margin: 0 auto;
	}
	.active-swipe {
	transform: scale(1.1);
	}
	.wiper-button {
	margin: 0 1rem;
	height: 70px;
	width: 45px;
	position: absolute;
	top: 50%;
	background: transparent;
	border: none;
	transform: translateY(-50%);
	z-index: 1;
	}
	.wiper-button__left {
	right: 0;
	transform: translateY(-50%) rotate(180deg);
	}
	.wiper__image-button {
	right: 50%;
	top: 50%;
	position: absolute;
	padding: 0.8rem 1rem;
	border-radius: 3px;
	background-color: white;
	border: none;
	font-size: 1.4rem;
	transform: translateY(-50%) translateX(50%);
	cursor: pointer;
	}
	.wiper-wrapper {
	max-width: 660px;
	overflow: hidden;
	padding: 2rem 0.5rem;
	margin: 0 auto;
	}
	.swiper__image-button {
	right: 50%;
	top: 50%;
	position: absolute;
	padding: 0.8rem 1rem;
	border-radius: 3px;
	background-color: white;
	border: none;
	font-size: 1rem;
	transform: translateY(-50%) translateX(50%);
	cursor: pointer;
	}
	.swiper__image-button:hover {
	color: red;
	}
	.wiper__image{
	height:100%;
	width:100%;
	object-fit: cover;
	border-radius:30px;
	}
	.is-hidden{
	display:none;
	}
  </style>
  
  <h1>Carousel</h1>
  <div style="height: 20px"></div>
  <h1>Sorting Methods</h1>
  <div class="wiper">
	<button class="wiper-button wiper-button__right">
	  <img src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="left" on:click={handlePrevClick} />
	</button>
	<div class="wiper-wrapper">
		<ul class="wiper-track wiper-track-0" >
		  {#each sortedData.programmingskillsData as { title, progress }, index}
			<li class="wiper-item {index === 1 ? 'active-swipe-0' : ''}">
			  <Skills {progress} {title} />
			</li>
		  {/each}
		</ul>
	  </div>
	<button class="wiper-button wiper-button__left">
	  <img src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="right" on:click={handleNextClick} />
	</button>
  </div>
  
  <div style="height: 300px"></div>
