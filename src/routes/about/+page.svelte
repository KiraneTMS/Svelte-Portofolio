<script>
	import Introduce from '../page_components/Introduce.svelte';
	import Title from '../page_components/Title.svelte';
	import Skills from '../page_components/Skills.svelte';

	//json
	import data from '../../lib/json/skillsDatas.json';

</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<Title/>
<Introduce/>
	<h2 class="skills_type">Programming Skills</h2>
	<div style="display: flex; gap: 20px; justify-content: center; align-items: center;
		overflow-x: auto;
		white-space: nowrap;
		scrollbar-width: thin;
		scrollbar-color: #333 #ccc;">
		{#each data.programmingskillsData as { title, progress}}
		<Skills {progress} {title} />
		{/each}
	</div>
	<h2 class="skills_type">Visual Arts and Design</h2>
	<div style="display: flex; gap: 20px; justify-content: center; align-items: center;
	overflow-x: auto;
	white-space: nowrap;
	scrollbar-width: thin;
	scrollbar-color: #333 #ccc;">
		{#each data.artSkillsData as { title, progress}}
			<Skills {progress} {title} />
		{/each}
	</div>
	<h2 class="skills_type">Language Skills</h2>
	<div style="display: flex; gap: 20px; justify-content: center; align-items: center;
	overflow-x: auto;
	white-space: nowrap;
	scrollbar-width: thin;
	scrollbar-color: #333 #ccc;">
		{#each data.languageSkillsData as { title, progress}}
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