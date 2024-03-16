<!-- <script>
  import { useLoaderData } from 'sveltekit';
  import { goto } from 'sveltekit';


  export let authenticated;

  export async function load({ cookies }) {
    const accessToken = cookies.get('access_token');
    // Implement proper database or user verification logic here
    const isAuthenticated = accessToken && accessToken === 'valid_token'; // Replace with actual validation
    return { authenticated: isAuthenticated };
  }
</script>

<slot />

{#if !authenticated}
  <p>You are not authorized to access this page. Please log in.</p>
  <button on:click={() => goto('/login')}>Login</button>  {/if}

{#if authenticated}
  <slot name="header" />  <slot />  {/if} -->
