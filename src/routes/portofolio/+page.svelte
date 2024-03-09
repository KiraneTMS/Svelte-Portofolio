<!-- portofolio.svelte -->
<script lang="ts">
	import ImageCard from '../page_components/ImageCard.svelte'; // Make sure to adjust the path based on your project structure

	const images = [
    { title: 'HTML', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'CSS', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'JavaScript', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Java', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Kotlin', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Php', link: "https://i.imgur.com/EJTwVZr.png"},
    // Add more skills as needed
  ];
  const tags = [
    { title: 'HTML'},
    { title: 'CSS'},
    { title: 'JavaScript'},
    { title: 'Java'},
    { title: 'Kotlin'},
    { title: 'Php1'},
    { title: 'Php2'},
    { title: 'Php3'},
    { title: 'Php4'},
    { title: 'Php5'},
    { title: 'Php6'},
    // Add more skills as needed
  ];

</script>

<style>
	/* Your global styles for the image gallery page */
	.portofolio-body {
		display: flex;
		/* width: 100%; */
		flex-direction: row;
		align-items: normal;
		padding-top: 50px;
	}

	.portofolio-filter {
		width: 20%; /* Adjust the width for the filter */
		background-color: #ff0000; /* Optional: add a background color */
		padding: 20px;
		margin-top: 20px;
		margin-right: auto; /* Push to the left */
	}

	.portofolio-content {
		flex: 1;
		width: 70%;
		padding: 20px; /* Adjust the padding as needed */
	}

	.tags-container {
  		max-width: 100%;
		padding-right: 10%;
	}
	.tag {
		background-color: #4B7CB6;
		padding: 8px 10px 8px 20px;
		width: fit-content;
		max-width: 100px;
		color: white;
		list-style: none;
		border-radius: 4px;
		position: relative;
		clip-path: polygon(0 50%, 10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%);
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
		width: 100%;
  		max-width: 100%;
		height: 35px;
		background: rgba(255, 255, 255, 0.2);
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

	.search-bar button {
		border: 0;
		border-radius: 50%;
		width: 50px;
		height: 50px;
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
	@media screen and (max-width: 768px) {
		.portofolio-body {
			flex-direction: column;
		}

		.portofolio-filter {
			width: 100%;
			margin-right: 0;
		}
	}
</style>

<div class="portofolio-body">
	<div class="portofolio-filter">
		<!-- Filter content goes here -->
	</div>
	<div class="portofolio-content">
		<form action="https://www.google.com/search" method="get" class="search-bar">
			<input type="text" placeholder="search anything" name="q">
			<button type="submit"><i class="fas fa-search"></i></button>
		</form>
			<div class="tags-container">
				<ul class="tags">
					{#each tags as { title}}
						<li class="tag">{title}</li>
					{/each}
				</ul>
			</div>
			
		<div class="image-gallery">
			{#each images as { title, link}}
			<ImageCard {title} {link} />
			{/each}
			<!-- Add more ImageCard components as needed -->
		</div>
	</div>
</div>
