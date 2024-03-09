<!-- GenreList.svelte -->
<script>
    /**
	 * @type {any[]}
	 */
     export let genres = [];
  </script>
  
  <style>
    .genre-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  
    .genre-item {
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      transition: background-color 0.3s ease;
    }
  
    .genre-item:hover {
      background-color: #0056b3;
    }
  </style>
  
  <div class="genre-list">
    {#each genres as genre (genre)}
      <div class="genre-item">
        {genre}
      </div>
    {/each}
  </div>
  