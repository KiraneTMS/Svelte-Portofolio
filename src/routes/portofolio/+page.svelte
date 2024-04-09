<!-- portofolio.svelte -->
<script lang="ts">
	import ImageCard from '../page_components/ImageCard.svelte'; // Make sure to adjust the path based on your project structure
	import ProgramCard from '../page_components/ProgramCard.svelte'; // Make sure to adjust the path based on your project structure

	let portofolioMode : number;
	let projectType = 'all';

	portofolioMode = 1;

	//json
  	import artsJson from '../../lib/json/arts.json';
  	import tagsJson from '../../lib/json/tags.json';
  	import typeJson from '../../lib/json/portofolioTypes.json';
	import ImageModal from '../page_components/ImageModal.svelte';

	let arts = artsJson
	let tags = tagsJson
	let types = typeJson
	let searchResult = ''
	let activatedArtTags: string[] = [];
	let activatedProgrammingTags: string[] = [];
	let currentShowedImageIndex : number
	
	let isModalShown = false;
	let isShowMatureContent = false;

	function toggleAllTag() {
		activatedArtTags = [];
		activatedProgrammingTags = [];
	}
	function toggleArtTag(tag: string) {
		if (activatedArtTags.includes(tag)) {
		// Remove the tag if it's already present
		activatedArtTags = activatedArtTags.filter(t => t !== tag);
		} else {
		// Add the tag if it's not present
		activatedArtTags = [...activatedArtTags, tag];
		}
		
		// Console log to show all indices and names available
		// console.log("Activated Art Tags:");
		// activatedArtTags.forEach((tag, index) => {
		// 	console.log(`Index: ${index}, Name: ${tag}`);
		// });
	}
	function toggleProgrammingTag(tag: string) {
		if (activatedProgrammingTags.includes(tag)) {
		// Remove the tag if it's already present
		activatedProgrammingTags = activatedProgrammingTags.filter(t => t !== tag);
		} else {
		// Add the tag if it's not present
		activatedProgrammingTags = [...activatedProgrammingTags, tag];
		}
	}

	//search function
	function handleInputChange(event: Event) {
		// Update the searchResult variable as the user types
		searchResult = (event.target as HTMLInputElement).value;

		// Perform your custom search logic here (e.g., display search results)
		// console.log('Performing search:', searchResult);
	}

	// Switch Portofolio Mode Function
	function handleButtonClick(event: MouseEvent) {
		const newMode = parseInt((event.currentTarget as HTMLElement).dataset.text || '0', 10);
		portofolioMode = isNaN(newMode) ? 0 : newMode;
		// Add any other logic you want to perform on button click
	}

	//Filter Art Portofolio
	$: filteredImages = arts.images
    .filter(({ title, description, tags, purpose }, index) => {
      const includesSearchResult = title.toLowerCase().includes(searchResult.toLowerCase()) || 
                                  (description && description.toLowerCase().includes(searchResult.toLowerCase()));

      const includesActivatedTags =
        activatedArtTags.length === 0 ||
        activatedArtTags.every(tag => tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()));

      const includesProjectType =
        projectType === 'all' ||
        purpose.toLowerCase().includes(projectType.toLowerCase());

      const isMatureContent = tags.map(t => t.toLowerCase()).includes('mature');

      const isValid = includesSearchResult && includesActivatedTags && includesProjectType && (isShowMatureContent || !isMatureContent);

        if (isValid) {
            // console.log(`Index: ${index}, Title: ${title}`);
        }

        return isValid;

    })
    .slice()
    .reverse();

	let sortedData = Object.fromEntries(
    Object.entries(tags).map(([key, value]) => [
        key,
        value.sort((a, b) => a.title.localeCompare(b.title))
    ])
    );

	// Define the type of Tool
	type Tool = {
		name: string;
		icon: string;
	};

	// Define the type of Art
	type Art = {
		title: string;
		link: string;
		description: string;
		tools: Tool[];
		tags: string[];
	};

	// Get the data of the first art
	let firstArt: Art | undefined;

	function getArt(index: number) {
		const filteredImage = filteredImages.filter(art => {
			if (isShowMatureContent) {
			// console.log(index)
			return true; // Include all images when isShowMatureContent is true
			} else {
			// console.log(index)
			return !art.tags.includes('mature'); // Exclude images with the 'mature' tag when isShowMatureContent is false
			}
		});

		currentShowedImageIndex = index
		firstArt = filteredImage[index];
		isModalShown = true;
		// console.log(filteredImages)
	}
	function closeImageModal() {
		// Add logic to close or hide the modal
		// You can use state management or emit an event to the parent component
		isModalShown = false
		// console.log(isModalShown);
	}
	function next() {
		const currentIndex = currentShowedImageIndex;
		const nextIndex = (currentIndex + 1 ) % filteredImages.length;
		getArt(nextIndex);
		// console.log(currentIndex)
	}
	function prev() {
		const currentIndex = currentShowedImageIndex;
		const prevIndex = (currentIndex - 1 ) % filteredImages.length;
		getArt(prevIndex);
		// console.log(currentIndex)
	}

	function toggleMatureContent() {
		isShowMatureContent = !isShowMatureContent;
	}

//pagination

	let currentPage = 0;
    const itemsPerPage = 9;

    function calculateTotalPages(images: Art[]) {
        return Math.ceil(images.length / itemsPerPage);
    }

    function paginateImages(images: Art[]) {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return images.slice(startIndex, endIndex);
    }
	
    $: totalPages = calculateTotalPages(filteredImages);
    $: paginatedImages = paginateImages(filteredImages);

    function goToPage(pageIndex: number) {
        console.log("Going to page:", pageIndex);
        currentPage = pageIndex;
        console.log("Current page:", currentPage);
  		paginatedImages = paginateImages(filteredImages);
        // Optionally, you can call paginateImages() here and update the UI accordingly
    }

</script>

<style>
	:root {
	--sz: 10px;
	--c1: #e7fbfe; /* Change this to your desired default color */
	--c1-off: #ff0000; /* Add this line for the off color (red in this case) */
	--c2: #1906c1;
	--c3: #0124e9;
	--tr: all 0.5s ease 0s;
	--clr: 1; /* change color from 1 to 12 */
	--hue: calc(30deg - (30deg * var(--clr)));
	}
	/* Your global styles for the image gallery page */

	.hidden {
		display: none;
	}
	.hide{
		opacity: 0;
	}
	.project-type{
		margin-top: 20px;
		color: white;
	}
	.portofolio-body {
		display: flex;
		/* width: 100%; */
		flex-direction: row;
		align-items: normal;
		padding-top: 50px;
	}

	.portofolio-filter {
		width: 20%; /* Adjust the width for the filter */
		/* background-color: #ff0000; */
		padding: 20px;
		margin-top: 20px;
		margin-right: auto; /* Push to the left */
	}

	.portofolio-content {
		flex: 1;
		width: 75%;
		padding: 20px; /* Adjust the padding as needed */
		padding-right: 40px;
	}

	.tags-container {
  		max-width: 100%;
		padding-right: 10%;
	}
	.tag {
		background: linear-gradient(64.00916346799386deg, rgba(58, 0, 92,1) 23.44140625%,rgba(58, 0, 92,1) 23.44140625%,rgb(51, 0, 236) 79.84765625%);
		padding: 8px 10px 8px 20px;
		width: fit-content;
		max-width: 100px;
		color: white;
		list-style: none;
		border-radius: 4px;
		position: relative;
		clip-path: polygon(0 50%, 10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%);
		cursor: pointer;
	}

	.tag::before {
		content: "";
		position: absolute;
		display: block;
		width: 8px;
		height: 8px;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
		background-color: white;
		border-radius: 100vh;
	}
	.active-tag {
		color: red;
	}

	.tags {
		display: flex;
		flex-direction: row; /* Adjust the flex direction as needed */
		gap: 20px;
		position: relative;
		overflow-x: auto;
		white-space: nowrap;
		scrollbar-width: thin;
		scrollbar-color: #333 #ccc;
	}

	.search-bar {
		/* width: 100%; */
  		max-width: 90%;
		height: 35px;
		background: rgba(46, 51, 88, 0.2);
		display: flex;
		align-items: center;
		border-radius: 60px;
		border-color: rgba(129, 96, 221);
		padding: 10px;
	}

	.search-bar input {
		background: transparent;
		flex: 1;
		border: 0;
		padding: 24px 20px;
		font-size: 20px;
		color: #cccc;
	}

	::placeholder {
		color: whitesmoke;
	}

	.image-gallery {
		width: 100%;
		max-width: 1200px; /* Adjust the max-width as needed */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 20px; /* Adjust the margin as needed */
	}
	.one {
	border: none;
	border-radius: 4px;
	text-shadow: 0px 0px 10px rgba(51, 0, 236, 0.48);
	overflow: hidden;
	padding: 20px 50px 20px 70px;
	margin-bottom: 20px;
	font-size: 20px;
	position: relative;
	color: white;
	outline: none;
	cursor: pointer;
	width: 100%;
	-webkit-transition: background-position .7s,box-shadow .4s;
	transition: background-position .7s,box-shadow .4s;
	background-size: 110%;
	font-family: 'Oswald', sans-serif;
	}
	.one:hover {
	background-position: 0% 30%;
	}
	.one:hover:after {
	right: -40px;
	-webkit-transition: right .4s,-webkit-transform 30s .2s linear;
	transition: right .4s,-webkit-transform 30s .2s linear;
	transition: right .4s,transform 30s .2s linear;
	transition: right .4s,transform 30s .2s linear,-webkit-transform 30s .2s linear;
	}
	.one:before, .one:after {
	font-family: FontAwesome;
	display: block;
	position: absolute;
	}
	.one:before {
	-webkit-transition: all 1s;
	transition: all 1s;
	font-size: 30px;
	left: 25px;
	top: 19px;
	}
	.one:after {
	-webkit-transition: right .4s, -webkit-transform .2s;
	transition: right .4s, -webkit-transform .2s;
	transition: right .4s, transform .2s;
	transition: right .4s, transform .2s, -webkit-transform .2s;
	font-size: 100px;
	opacity: .3;
	right: -120px;
	top: -17px;
	}

	.one {
		box-shadow: 0px 0px 0px 2px rgba(81, 54, 230, 0.86) inset, 0px 0px 10px 0px #fdfdfd;
	}
	.one:hover {
	box-shadow: 0px 0px 0px 2px rgba(14, 0, 92, 0.16) inset, 0px 0px 30px 0px #fdfdfd;
	}
	.one:hover:after {
	-webkit-transform: scale(1);
			transform: scale(1);
	}
	.one:hover:before {
	-webkit-transform: scale(1.2);
			transform: scale(1.2);
	}
	.one b {
	color: #353434;
	font-weight: 700;
	font-style: italic;
	font-size: 20px;
	text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.78);
	}

	.hidden {
    display: none;
  }

  #modalContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999; /* Set a higher z-index to appear in front of everything else */
	background-color: rgba(0, 0, 0, 0.86);
  }

  .close-container {
    position: absolute;
    top: 0;
    right: 1%;
    z-index: 3; /* Set a higher z-index for the close container */
  }

  .close-circle {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background-color: red; /* Set your desired color */
    border-radius: 50%;
    z-index: 2; /* Set a higher z-index for the red circle */
  }

  .close-icon {
    color: white;
    margin-right: 6px;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    z-index: 3; /* Set a higher z-index for the close icon */
  }

  /* Next Prev Button */
  .prev{
	position: fixed;
	top: 50%;
	left: 0;
	width: 40px;
	height: 40px;
	background-color: #333;
	text-align: center;
	padding-top: 20px;
	color: #fdfdfd;
	font-size: 20px;
	border-radius: 100%;
	cursor: pointer;
  }
  .next{
	position: fixed;
	top: 50%;
	right: 0;
	width: 40px;
	height: 40px;
	background-color: #333;
	text-align: center;
	padding-top: 20px;
	color: #fdfdfd;
	font-size: 20px;
	border-radius: 100%;
	cursor: pointer;
  }

  /* Hide Mature Content Toggle */
  .toggle {
		position: relative;
		width: calc(var(--sz) * 4);
		height: calc(var(--sz) * 2);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mature-input {
		display: none;
	}

	label[for=btn] {
		position: absolute;
		width: calc(var(--sz) * 4);
		height: calc(var(--sz) * 2);
		background: #01109b;
		border-radius: var(
			--sz);
		box-shadow: 0 calc(var(--sz) / 20) calc(var(--sz) / 10) 0 var(--c3) inset, 0 calc(var(--sz) / 5) calc(var(--sz) / 2) calc(var(--sz) / -10) var(--c1) inset, 0 calc(var(--sz) / 25) calc(var(--sz) / 20) 0 #fffc, 0 calc(var(--sz) / -50) calc(var(--sz) / 20) 0 #0003;
	}	

	.thumb {
		position: absolute;
		width: calc(calc(var(--sz)* 2) - calc(var(--sz) / 8));
		height: calc(calc(var(--sz)* 2) - calc(var(--sz) / 8));
		top: calc(calc(var(--sz) / 10) + calc(var(--sz) / -20));
		left: calc(calc(var(--sz) / 10) + calc(var(--sz) / -30));
		background: conic-gradient(from -45deg, var(--c1) 0 90deg, var(--c2), var(--c1));
		border-radius: var(--sz);
		box-shadow: 0 calc(var(--sz) / 50) calc(var(--sz) / 30) calc(var(--sz) / 80) var(--c3);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	#btn:checked + label .thumb {
		--lg: var(--on);
		transition: var(--tr);
		left: calc(calc(100% - calc(calc(var(--sz) * 2) - calc(var(--sz) / 3))) - calc(calc( var(--sz) / 10) + calc(var(--sz) / 5.75)));

	}
	#btn:not(:checked) + label {
	background: var(--c1-off); /* Use --c1-off variable when the checkbox is not checked */
	}

	.thumb:before {
		content: "";
		position: absolute;
		width: calc(var(--sz) / 0.7);
		height: calc(var(--sz) / 0.7);
		background: #b7eef7;
		border-radius: 100%;
		box-shadow: 0 0 calc(var(--sz) / 50) 0 #fff, 0 0 calc(var(--sz) / 50) 0 #fff inset;
		z-index: 3;
	}

	.thumb:after {
		content: "";
		position: absolute;
		background: radial-gradient(circle at 50% 50%, #fff calc(var(--sz) / 40), #fff0 calc(var(--sz) / 2) 100%), conic-gradient(from -45deg, var(--c1) 0 90deg, #55d5e9, #55d5e9, var(--c1));
		width: 100%;
		height: 100%;
		border-radius: 100%;
		transition: var(--tr);
	}

	#btn:checked + label .thumb::after {
		background: radial-gradient(circle at 95% 50%, #fff calc(var(--sz) / 50), #fff0 calc(var(--sz) / 1.75) 100%), conic-gradient(from -45deg, var(--c1) 0 90deg, #55d5e9, #55d5e9, var(--c1));
	}

	.light {
		right: calc(var(--sz)* -2.75);
		z-index: 1;
		background: #121212;
		position: relative;
		width: calc(var(--sz) / 1);
		height: calc(var(--sz) / 4);
		border-radius: var(--sz);
		box-shadow: 0 calc(var(--sz) / -100) calc(var(--sz) / 10) calc(var(--sz) / 100) #fff, 0 calc(var(--sz) / 100) calc(var(--sz) / 50) calc(var(--sz) / 50) var(--c3);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: var(--tr);
	}

	.light:before {
		content: "";
		transition: var(--tr);
		width: 100%;
		height: 100%;
		position: absolute;
		background: linear-gradient(180deg, var(--c1), var(--c2));
		border-radius: var(--sz);
		box-shadow: 0 calc(var(--sz) / 3) calc(var(--sz) / 3) calc(var(--sz) / 20) #fff8 inset;
		z-index: 2;
	}

	#btn:checked + label + .light:before {
		transition: var(--tr);
		box-shadow: 0 0 calc(var(--sz) / 50) calc(var(--sz) / 100) var(--c1) inset, 0 0 calc(var(--sz) / 2.5) calc(var(--sz) / 12) var(--c1), 0 0 calc(var(--sz) / 1) calc(var(--sz) / 100) #fff inset, 0 0 calc(var(--sz) / 3) calc(var(--sz) / 50) #FFF;
	}

	@media (max-width: 482px) {
    .close-container {
      top: -15%;
      right: 25%;
    }
    .close-icon {
      margin-right: 7.5px;
      font-size: 18px; /* Adjust close icon size for smaller screens */
    }

	.portofolio-body {
		flex-direction: column;
	}

	.portofolio-filter {
		width: 80%;
	}
  }
  @media (max-width: 768px) {
    .close-container {
      top: 0;
      right: 15%;
    }
    .close-icon {
      margin-right: 7.5px;
      font-size: 18px; /* Adjust close icon size for smaller screens */
    }

	.portofolio-body {
		flex-direction: column;
	}

	.portofolio-filter {
		width: 80%;
	}
  }

  /* pagination */
  .pagination {
        display: flex;
        justify-content: center; /* Horizontally center the buttons */
        margin-top: 20px; /* Adjust as needed */
    }
  .pagination-button {
        background: linear-gradient(64.00916346799386deg, rgba(58, 0, 92,1) 23.44140625%, rgba(58, 0, 92,1) 23.44140625%, rgb(51, 0, 236) 79.84765625%);
        color: white;
		border-radius: 10px;
        padding: 5px 10px;
        border: none;
        margin: 0 2px;
        cursor: pointer;
    }

    .pagination-button.active {
        background: linear-gradient(64.00916346799386deg, rgb(215, 162, 247) 23.44140625%, rgb(215, 162, 247) 23.44140625%, rgb(161, 135, 255) 79.84765625%);
    }

</style>
<svelte:head>
	<title>Portofolio</title>
	<meta name="description" content="All Project I've worked on" />
</svelte:head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-DLcjxQ8iJkqlNKn3P9gZPxCVIn+EGkLfd5k7ahFpsENuq+nbrk62Zekn5L/sW7t6" crossorigin="anonymous">
<div style="max-width: 1300px; vertical-align: middle; align-items: center;">
   <div id="modalContainer" class={!isModalShown ? 'hidden' : ''}>
   <div class="close-container">
      <span class="close-icon" on:click={() => closeImageModal()}>✕</span>
      <span class="close-circle"></span>
   </div>
   {#if firstArt}
   <ImageModal title={firstArt.title} link={firstArt.link} tools={firstArt.tools} description={firstArt.description} />
   <!-- {console.log(isModalShown)} -->
   {/if}		
   <div class="prev" on:click={prev}>&lt;</div>
   <div class="next" on:click={next}>&gt;</div>
</div>
<div class="portofolio-body">
   <div class="portofolio-filter">
      <!-- Filter content goes here -->
      {#each types.portofolio_types as { title, image, icon, type}}
      <button class='one' data-text={type} 
         style="background-image: linear-gradient(to bottom, #232324, rgba(122, 118, 126, 0.51)), url({image}); background-size: cover; background-position: center; color: white; padding: 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; font-weight: bold; position: relative;"
         on:click={handleButtonClick}>
         <b>{title}</b> Portofolio
         <style>
            /* :root {
            --icon: icon;
            } */
            .one::before, .one::after {
            content: {icon};
            position: absolute;
            font-size: 24px;
            top: 50%;
            transform: translateY(-20%);
            }
            .one::before {
            left: 10px;
            }
            .one::after {
            right: 10px;
            }
         </style>
      </button>
      {/each}
   </div>
   <div class="portofolio-content">
      <form class="search-bar">
         <input type="text" placeholder="Search anything" name="q" bind:value={searchResult} on:input={handleInputChange}>
      </form>
      <div>
         <!-- Your form content here -->
         <div class="project-type">
            <label>
            <input type="radio" name="projectType" value="all" bind:group={projectType}>
            All
            </label>
            <label>
            <input type="radio" name="projectType" value="personal" bind:group={projectType}>
            Personal
            </label>
            <label>
            <input type="radio" name="projectType" value="academic" bind:group={projectType}>
            Academic
            </label>
            <label>
            <input type="radio" name="projectType" value="professional" bind:group={projectType}>
            Professional
            </label>
         </div>
      </div>
      <div class="tags-container">
         {#if portofolioMode == 1}
         <ul class="tags">
            <li class="tag" on:click={toggleAllTag} value="">All</li>
            {#each sortedData.Art as { title}}
            <li on:click={() => toggleArtTag(title)} class="{['tag', activatedArtTags.includes(title) && 'active-tag'].filter(Boolean).join(' ')}" value={title}>{title}</li>
            {/each}
         </ul>
         {:else if portofolioMode == 2}
         <ul class="tags">
            <li class="tag" on:click={toggleAllTag} value="">All</li>
            {#each sortedData.Programming as { title}}
            <li on:click={() => toggleProgrammingTag(title)} class="{['tag', activatedProgrammingTags.includes(title) && 'active-tag'].filter(Boolean).join(' ')}" value={title}>{title}</li>
            {/each}
         </ul>
         {/if}
      </div>
      <label class={portofolioMode == 2? "hide":""} for="toggle" style="color: white; font-size: 13px;">Show Mature Content</label>
      <div class="toggle {portofolioMode == 2? "hide":""}">
      <input class="mature-input" type="checkbox" id="btn" on:change={toggleMatureContent}>
      <label for="btn">
      <span class="thumb">
      <span class="shadow"></span>
      </span>
      </label>
   </div>
   <div class="image-gallery">
      {#if portofolioMode == 1}
      {#each paginatedImages as { title, link, tools, description}, index}
      <div on:click={() => getArt(index)} style="cursor: pointer;">
         <ImageCard {title} {description} {link} {tools}/>
      </div>
      {/each}
      {:else if portofolioMode == 2}
      <ProgramCard {searchResult} {activatedProgrammingTags} {projectType}/>
      {/if}
      <!-- Add more ImageCard components as needed -->
   </div>
   	  {#if portofolioMode == 1}
		<div class="pagination">
			{#each Array.from({ length: totalPages }) as _, index}
				<button class="{currentPage === index ? 'pagination-button active' : 'pagination-button'}" on:click={() => goToPage(index)}>{index + 1}</button>
			{/each}
		</div>
      {:else if portofolioMode == 2}
      {/if}
   
</div>
</div>	
</div>