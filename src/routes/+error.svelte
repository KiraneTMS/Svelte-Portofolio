<script>
	import { page } from '$app/stores';
</script>

{#if $page.error}
    <style>
      /* Import your font from Google Fonts */
      @import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

      /* Reset default styles for better control */
      * {
        padding: 0;
        margin: 0;
      }

      .error-body {
        background-size: cover; /* Use 'cover' to ensure the background covers the entire element */
        color: white;
        font-family: 'Silkscreen', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%; /* Set width to 100% */
        &::after {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background-size: cover; /* Use 'cover' to ensure the background covers the entire element */
          background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb1%2Faa%2F2c%2Fb1aa2c6322c087183a432a7ede2695ae.gif&f=1&nofb=1&ipt=3e3b4394356f5d2b9eb9fc85c50b12e4e7a7d6fbd0ab3aa45a59746f1b94ce5c&ipo=images);
          mix-blend-mode: screen;
        }
      }


      /* Style your h1 elements */
      .error-status{
      font-size: 450%;
      text-shadow: 0 0 18px white;
      position: relative;
      &::after, &::before{
        content: attr(data-text);
        position: absolute;
        left: 4px;
        text-shadow: none;
        background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3DPAzwJxrwCre%2Fgiphy.gif&f=1&nofb=1&ipt=dc4dd2260b9ccecc06fc391c3c781a47f6dd210b6e9d1d80c61beb36b618cdc9&ipo=images);
        background-clip: text;
        color: transparent;
        mix-blend-mode: lighten;
        pointer-events: none;
      }
      &::before{
        left: -3px;
        mix-blend-mode: lighten;
      }
    }
    .error-msg{
      font-size: 250%;
      text-shadow: 0 0 18px white;
      position: relative;
      &::after, &::before{
        content: attr(data-text);
        position: absolute;
        left: -5px;
        text-shadow: none;
        background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3DPAzwJxrwCre%2Fgiphy.gif&f=1&nofb=1&ipt=dc4dd2260b9ccecc06fc391c3c781a47f6dd210b6e9d1d80c61beb36b618cdc9&ipo=images);
        background-clip: text;
        color: transparent;
        mix-blend-mode: lighten;
        pointer-events: none;
      }
      &::before{
        left: -3px;
        mix-blend-mode: lighten;
      }
    }
    </style>

<div class="error-body">
  <h1 class="error-status" data-text={$page.status}>{$page.status}</h1><br>
  <h1 class="error-msg" data-text={$page.error.message}>{$page.error.message}</h1>
</div>

{:else}
{/if}
