<script lang="ts">
    import softwaresJson from '../../lib/json/softwares.json';
    import tags from '../../lib/json/tags.json';

    export let searchResult ="";
    export let activatedProgrammingTags: string[] = [];
    export let projectType = "";

    if (projectType !== 'all') {
      projectType = '';
    } 

    $: filteredProgram = softwaresJson.software.filter(({ name, purpose, description, tech_stack }) => {
		const includesSearchResult = name.toLowerCase().includes(searchResult.toLowerCase()) || 
									(description && description.toLowerCase().includes(searchResult.toLowerCase()));

		const includesActivatedTags =
		activatedProgrammingTags.length === 0 ||
		// activatedArtTags.some(tag => tags.some(imageTag => imageTag.toLowerCase() === tag.toLowerCase()));
		// activatedArtTags.every(tag => tags.includes(tag))
		activatedProgrammingTags.every(tag => 
			tech_stack.map(t => t.name.toLowerCase()).includes(tag.toLowerCase())
		)

    
    const includesProjectType =
    projectType === 'all' || // If projectType is 'all', include everything
    purpose.toLowerCase().includes(projectType.toLowerCase()); // Adjusted for partial matching

		return includesSearchResult && includesActivatedTags && includesProjectType;
	})
	.slice() // Create a copy of the array to avoid mutating the original
	.reverse(); // Reverse the array to show the newest first
    </script>
    
    <style>
      /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'); */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins',sans-serif;
      }
  
      :root {
        --prime-color: #4d1cff;
        --hover-color: #8792c2;
      }
  
      .card {
        width: 280px;
        height: 280px;
        background: #00013b;
        border-radius: 30px;
        position: relative;
        transition: 0.5s ease-in-out;
        overflow: hidden;
      }
  
      .profile-pic {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 30px;
        z-index: 1;
        border: 2px solid white;
        overflow: hidden;
        transition: 0.5s ease-in-out 0.3s;
      }
  
      .profile-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        top: 0;
        transition: 0.5s ease-in-out;
      }
  
      .card:hover .profile-pic {
        width: 100px;
        height: 100px;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        border: 5px solid var(--prime-color);
        box-shadow: 0 0 10px #1115;
        transition: 0.5s ease-in-out;
        z-index: 3;
      }
  
      .card:hover .profile-pic img {
        transform: scale(1.6);
        top: 20px;
        transition: 0.5s ease-in-out 0.5s;
  
      }
  
      .details {
        position: absolute;
        left: 4px;
        right: 4px;
        bottom: 4px;
  
        z-index: 2;
        top: 80%;
        background: var(--prime-color);
        color: white;
        border-radius: 25px;
        box-shadow: inset 5px 5px 10px #1114, 0px 80px 2px var(--prime-color);
        transition: 0.3s ease-in-out 0.2s;
        overflow: hidden;
      }
  
      .card:hover .details {
        top: 20%;
        border-radius: 80px 25px 25px 25px;
        transition: 0.5s ease-in-out 0.2s;
      }
  
      .content {
        position: absolute;
        top: -300px;
        left: 20px;
        opacity: 0;
        transition: 0.5s ease-in-out 0s;
      }
  
      .card:hover .content {
        top: 10px;
        opacity: 1;
        transition: 0.5s ease-in-out 0.5s,
          opacity 0.5s ease-in-out 1s;
      }
  
      .content h2 {
        margin-left: 100px;
        font-size: 1.5rem;
        font-weight: bold;
      }
  
      .content .tag {
        margin-left: 100px;
        font-size: 0.6rem;
        letter-spacing: 2px;
        font-weight: 200;
      }
  
      .content .about {
        font-size: 0.8rem;
        margin-top: 10px;
        width: 80%;
      }
  
      .buttons {
        position: absolute;
        bottom: 12px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
  
      .buttons .social {
        display: flex;
        gap: 15px;
      }
  
      .buttons .social i {
        color: white;
        cursor: pointer;
      }
  
      .buttons .social i:hover {
        color: var(--hover-color);
      }
  
      .buttons .link {
        text-decoration: none;
        color: var(--prime-color);
        background: white;
        padding: 7px 10px;
        border-radius: 20px;
        font-size: .9rem;
      }
  
      .buttons .link:hover {
        background: var(--hover-color);
  
      }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-DLcjxQ8iJkqlNKn3P9gZPxCVIn+EGkLfd5k7ahFpsENuq+nbrk62Zekn5L/sW7t6" crossorigin="anonymous">
      {#each filteredProgram as { name, image, brief_description, purpose, Platform, tech_stack, source}}
        <div class="card">
      
          <div class="profile-pic">
            <img src={image} alt="Profile Pic">
          </div>
      
          <div class="details">
            <div class="content">
              <h2>{name}</h2>
              <p class="tag">{Platform} Application</p>
              <p class="about">{brief_description}</p>
            </div>
      
            <div class="buttons">
              <div class="social">
                {#each tech_stack as tech}
                  {#each tags.Programming as tag}
                    {#if tag.title === tech.name}
                      <div class="tech" title={tag.title}>
                        <img src={tag.image}>
                      </div>
                    {/if}
                  {/each}
                {/each}
              </div>
              <a href={source} class="link">Project ➜</a>
            </div>
      
          </div>
      
        </div>
    {/each}