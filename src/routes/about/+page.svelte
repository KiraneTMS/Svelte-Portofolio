<script>
	import Introduce from '../page_components/Introduce.svelte';
	import Title from '../page_components/Title.svelte';
	import Skills from '../page_components/Skills.svelte';
	
	const programmingskillsData = [
    { title: 'HTML', progress: 1},
    { title: 'CSS', progress: 0.8},
    { title: 'JavaScript', progress: .75},
    { title: 'Java', progress: .85},
    { title: 'Kotlin', progress: .8},
    { title: 'Php', progress: .85},
    // Add more skills as needed
  ];
	const laguageSkillsData = [
		{ title: 'English', progress: .75},
		{ title: 'Japanesse', progress: .8}
		// Add more skills as needed
	];
	const artSkillsData = [
		{ title: 'Digital Art', progress: .85},
		{ title: 'Character Design', progress: .8},
		{ title: 'Concept Art', progress: .8}
		// Add more skills as needed
	];
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<Title/>
<Introduce/>
	<h2 class="skills_type">Programming Skills</h2>
	<div style="display: flex; gap: 20px; justify-content: center; align-items: center;">
		{#each programmingskillsData as { title, progress}}
		<Skills {progress} {title} />
		{/each}
	</div>
	<h2 class="skills_type">Visual Arts and Design</h2>
	<div style="display: flex; gap: 20px; justify-content: center; align-items: center;">
		{#each artSkillsData as { title, progress}}
			<Skills {progress} {title} />
		{/each}
	</div>
	<h2 class="skills_type">Language Skills</h2>
	<div style="display: flex; gap: 20px; justify-content: center; align-items: center;">
		{#each laguageSkillsData as { title, progress}}
			<Skills {progress} {title} />
		{/each}
	</div>

<style>
	.skills_type{
		color: #fff;
		font-size: 40px;
		margin: 40px;
	}
</style>