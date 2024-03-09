<!-- portofolio.svelte -->
<script lang="ts">
	import ImageCard from '../page_components/ImageCard.svelte'; // Make sure to adjust the path based on your project structure

	const images = [
    { title: 'Aurluna1', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Aurluna2', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Aurluna3', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Aurluna4', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Aurluna5', link: "https://i.imgur.com/EJTwVZr.png"},
    { title: 'Aurluna6', link: "https://i.imgur.com/EJTwVZr.png"},
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
  const portofolio_types = [
    { title: 'Art', image: "https://i.imgur.com/szQmpON.png", icon: "🖌"},
    { title: 'programming', image: "https://i.imgur.com/6U5uWXn.png", icon: "</>"},
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
		/* background-color: #ff0000; */
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
		background: linear-gradient(64.00916346799386deg, rgba(58, 0, 92,1) 23.44140625%,rgba(58, 0, 92,1) 23.44140625%,rgb(51, 0, 236) 79.84765625%);
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

</style>

<div class="portofolio-body">
	<div class="portofolio-filter">
		<!-- Filter content goes here -->
		{#each portofolio_types as { title, image, icon}}
			<button class='one' style="background-image: linear-gradient(to bottom, #232324, rgba(122, 118, 126, 0.51)), url({image}); background-size: cover; background-position: center; color: white; padding: 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; font-weight: bold; position: relative;">

				<b>{title}</b> Portofolio
				<style>
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
