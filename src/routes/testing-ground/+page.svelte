<!-- ImageCard.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import VanillaTilt from 'vanilla-tilt';

  // export let isModalShown;
  export let link = "";
  export let title = "";
  export let description = "";
  export let tools: { name: string; icon: string }[] = [];

  let isToolNameVisible = false;
  let toolName = '';

  function showToolName(name: string) {
    toolName = name;
    isToolNameVisible = true;
  }

  function hideToolName() {
    isToolNameVisible = false;
  }

  onMount(() => {
      const tiltContainers = document.querySelectorAll('.art-product-container') as NodeListOf<HTMLElement>;

      tiltContainers.forEach((tiltContainer) => {
          const overlay = document.createElement('div');
          overlay.classList.add('overlay');
          tiltContainer.appendChild(overlay);

          const updateOverlayPosition = () => {
              overlay.style.backgroundImage = 'linear-gradient(to top right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))';
          };

          tiltContainer.addEventListener('mouseenter', updateOverlayPosition);

          VanillaTilt.init(tiltContainer, {
              max: 15,
              speed: 400,
              glare: true,
              'max-glare': 0.5,
          });

          tiltContainer.addEventListener('mouseleave', () => {
              overlay.style.backgroundImage = 'none';
          });
      });
  });
  
  
</script>

<style>
  /* Your styles here */
  .art-product-container {
    width: 700px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background:rgba(0, 0, 0, .6);
      transition: background-image 0.3s ease;
  }

  .art-name {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white;
      font-size: 16px;
  }
  .art-description {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      font-size: 10px;
  }
  .small-image{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px; /* Adjust the size as needed */
    height: 30px;
  }
  .tool-name {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 3px;
    z-index: 999;
  }

  .tool-container {
    position: relative;
  }
  /* Media queries for smaller screens */
  @media (max-width: 768px) {
    .art-product-container {
      height: 250px; /* Adjust height for smaller screens */
    }

    .overlay {
      width: 405px; /* Adjust overlay height for smaller screens */
      left: 21%;
    }

    .art-name {
      font-size: 10px; /* Adjust font size for smaller screens */
      bottom: 5px;
    }

    .art-description {
      font-size: 8px; /* Adjust description font size for smaller screens */
      top: 5px;
      left: 10px;
    }
  }
</style>


<div class="art-product-container" style="background: transparent url('{link}');background-size: contain;background-repeat: no-repeat;background-position: center;"></div>
  
<div class="overlay">
  <h1 class="art-name">{title}</h1>
  <p class="art-description">{description}</p>
  {#each tools as { name, icon }}
    <div class="tool-container" on:mouseover={() => showToolName(name)} on:mouseout={() => hideToolName()}>
      <div class="small-image" style="background: url('{icon}'); background-size: cover;"></div>
    </div>
  {/each}

  {#if isToolNameVisible}
    <div class="tool-name">{toolName}</div>
  {/if}
</div>