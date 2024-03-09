<script>
    export let progress;
    export let title = "Progress";
    
    let titleColor = "#fff"; // Default title color
    let progressColor = "#000"; // Default progress color
  
    const angle = 360 * progress;
    const number = progress * 100;
  
    const background = `radial-gradient(white 50%, transparent 51%),
      conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
      conic-gradient(#9d87ff 0deg, #3300ec 90deg, #3a005c 180deg, #1c002c);`;
  
    $: cssVarStyles = `--background:${background}`;
  </script>
  
  <style>
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 10px;
      background-color: #666666;
    }
  
    #progress-circle {
      /* Your existing styling for the progress circle */
      background: var(--background);
      border-radius: 50%;
      width: 120px;
      height: 120px;
      position: relative;
      transition: all 500ms ease-in;
      will-change: transform;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
  
    #progress-text {
      /* Your existing styling for the progress text */
      font-size: 24px;
      font-weight: bold;
      margin-top: 10px;
      color: var(--title-color, #fff); /* Use var() to allow customization */
      z-index: 2;
    }
  
    #skill-title {
      color: var(--progress-color, #000); /* Use var() to allow customization */
    }
  </style>
  
  <div class="card" id="card-container">
    <span id="progress-text" style="--title-color: {titleColor}">
      {title}
    </span>
    <div id="progress-circle" style="{cssVarStyles}">
      <span id="skill-title" style="--progress-color: {progressColor}">
        {number.toFixed(0)}%
      </span>
    </div>
  </div>