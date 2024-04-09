<!-- ImageCard.svelte -->
<script lang="ts">
    let isPolicyVisible = false;
  
    function togglePolicy() {
      isPolicyVisible = !isPolicyVisible;
    }
  
    function closePolicy() {
      isPolicyVisible = false;
    }
  </script>
  
  <style>
    .container {
    display: flex;
    flex-direction: column; /* Ensure the button is placed on top */
    justify-content: flex-start; /* Align content to the top */
    align-items: center;
    top: 0;
    position: relative;
    }

  
    .policy-button {
      background-color: red;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      width: 100%;
      max-width: 600px;
      border-radius: 10px;
      margin-bottom: 20px;
      display: block;
      text-align: center;
    }
  
    .red-box {
      background-color: rgba(255, 0, 0, 0.2); /* Red with transparency */
      border-radius: 10px; /* Rounded border */
      padding: 20px;
      max-width: 600px;
      border: 2px solid red;
    }
  
    .red-text {
      color: red; /* Red text color */
      font-size: 16px;
      line-height: 1.5;
    }
  
    .red-link {
      color: red; /* Red link color */
      text-decoration: none;
    }
  
    .red-link:hover {
      text-decoration: underline;
    }
  
    .close-button {
    background-color: red;
    height: 30px;
    width: 30px;
    font-size: 20px;
    border-radius: 10%; /* Make the button circular */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }

    @media (max-width: 768px) {
        .policy-button {
        max-width: 400px;
        }
    
        .red-box {
        max-width: 400px;
        }
  }
  
  </style>
  
  <div class="container">
    {#if !isPolicyVisible}
      <button class="policy-button" on:click={togglePolicy}>Policy</button>
    {/if}
    <div class="red-box" style="display: {isPolicyVisible ? 'block' : 'none'}">
      <span class="close-button" on:click={closePolicy}>&times;</span>
      <p class="red-text">Policy for Using ArinEmir's Drawings:</p>
      <p class="red-text">1. Attribution: If you download or use any of my drawings, you are required to provide proper attribution. Please tag my DeviantArt account: <strong><a href="https://www.deviantart.com/arinemir" class="red-link">ArinEmir</a></strong> or my Twitter account: <strong><a href="https://twitter.com/_ArinEmir_" class="red-link">_ArinEmir_</a></strong> in any social media posts, websites, or other platforms where the artwork is displayed.</p>
      <p class="red-text">2. Non-commercial Use: If you intend to use my drawings for non-commercial purposes (e.g., personal projects, non-profit initiatives, educational materials), proper attribution as described above is sufficient.</p>
      <p class="red-text">3. Commercial Use: If you wish to use my drawings for commercial purposes (e.g., marketing campaigns, merchandise, advertisements), you must contact me for permission. Please reach out to me through my DeviantArt or Twitter accounts to discuss licensing and usage terms.</p>
      <p class="red-text">4. Modification: You are not allowed to modify my drawings without prior consent. If you have any specific requests for modifications or adaptations, please contact me to discuss them.</p>
      <p class="red-text">5. Enforcement: Failure to comply with these terms may result in legal action to protect my intellectual property rights.</p>
      <p class="red-text">Thank you for respecting my work and adhering to these guidelines. If you have any questions or need further clarification, feel free to contact me through DeviantArt or Twitter.</p>
    </div>
  </div>
  