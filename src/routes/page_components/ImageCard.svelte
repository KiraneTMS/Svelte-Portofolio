<!-- ImageCard.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import VanillaTilt from 'vanilla-tilt';

    export let link = "";
    export let title = "";
    export let description = "";
    export let tools: { name: string; icon: string }[] = [];
    let preprocessedTools: Tool[] = [];

    interface Tool {
        name: string;
        icon: string;
    }
  
    async function preprocessTools(tools: Tool[]): Promise<Tool[]> {
        return Promise.all(tools.map(async tool => {
            const isValid = await isImagePathValid(tool.icon);
            return { ...tool, iconPath: isValid ? tool.icon : '/vercel/path0' + tool.icon };
        }));
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

    onMount(async () => {
        preprocessedTools = await preprocessTools(tools);
    });

    // Function to check if image path is valid
    async function isImagePathValid(imagePath: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = imagePath;
        });
    }
    let truncateDescription = (description: string, maxLength: number) => {
      if (description.length > maxLength) {
        return `${description.slice(0, maxLength)}...`;
      } else {
        return description;
      }
    };
    </script>
  
  <style>
    /* Your styles here */
    .art-product-container {
      width: 300px;
      height: 200px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }
  
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background:rgba(0, 0, 0, .4);
        transition: background-image 0.3s ease;
    }

    .art-name {
        position: absolute;
        bottom: 5px;
        left: 10px;
        color: white;
        font-size: 12px;
    }
    .art-description {
        position: absolute;
        top: 5px;
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
  </style>
  
  <div class="art-product-container" style="background: #7e7e7e url('{link}');background-size: cover;background-position: center;">
    <!-- Your content here -->
    <div class="overlay">
      <h1 class="art-name">{title}</h1>
      <p class="art-description" style="line-height: 1.2;">{truncateDescription(description, 50)}</p>
      {#each preprocessedTools as tool}
          <div class="small-image" style="background: url({tool.icon}); background-size: cover;"></div>
      {/each}
    </div>
  </div>
  