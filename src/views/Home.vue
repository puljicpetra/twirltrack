<template>
    <div class="home-container">
      <div class="content">
        <h1>Državno prvenstvo</h1>
        <h1>mažoretkinja</h1>
        <h1>2024.</h1>
        <p>3.–5. svibnja</p>
      </div>
      <div class="image-container">
        <img src="@/assets/sv_martin.jpg" alt="Toplice Sveti Martin" />
        <div class="image-text">
          <p class="title">Toplice Sveti Martin,</p>
          <p class="subtitle">Izvorska 3, 40313 Sveti Martin Na Muri</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  }
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-image: url('@/assets/logo_savez.jpg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    background-blend-mode: lighten;
  }
  
  .content {
    color: black;
    z-index: 2;
    text-align: left;
    margin-left: 10%; /* Adjust this value to bring the text closer to the center */
  }
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }
  
  p {
    font-size: 1.5rem;
    margin-top: 10px;
  }
  
  .image-container {
    position: relative;
    max-width: 350px;
    text-align: right; /* Align text to the right */
    margin-right: 10%; /* Adjust this value to bring the image and text closer to the center */
    z-index: 2;
  }
  
  .image-container img {
    width: 100%;
    border-radius: 15px;
  }
  
  .image-text {
    margin-top: 10px;
    text-align: right; /* Ensure text is aligned to the right */
  }
  
  .image-text .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
  }
  
  .image-text .subtitle {
    font-size: 1rem;
    margin: 0;
    color: gray;
  }
  </style>
  