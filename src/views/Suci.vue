<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/home" class="navbar-brand">twirltrack</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/suci" class="nav-link">Suci</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/popis-natjecatelja" class="nav-link">Popis natjecatelja</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/prijava-na-natjecanje" class="nav-link">Prijava na natjecanje</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="btn btn-outline-light" type="button">Log out</button>
            </li>
          </ul>
        </div>
      </nav>
      <div class="suci-container">
        <h1>Suci</h1>
        <div class="card-row">
          <!-- Kartica 1 -->
          <div class="card">
            <img class="card-img-top" :src="require('@/assets/sudacAlenScuric.jpg')" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Alen Šćuric: Kratki opis suca i relevantne informacije.</p>
            </div>
          </div>
          <!-- Kartica 2 -->
          <div class="card">
            <img class="card-img-top" :src="require('@/assets/sudacAnjaPuhalo.jpg')" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Suci 2: Kratki opis suca i relevantne informacije.</p>
            </div>
          </div>
          <!-- Kartica 3 (Središnja kartica) -->
          <div class="card center-card">
            <img class="card-img-top" :src="require('@/assets/sudacIvanaMujkic.jpg')" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Suci 3: Kratki opis suca i relevantne informacije.</p>
            </div>
          </div>
          <!-- Kartica 4 -->
          <div class="card">
            <img class="card-img-top" :src="require('@/assets/sudacJelenaRaguz.jpg')" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Suci 4: Kratki opis suca i relevantne informacije.</p>
            </div>
          </div>
          <!-- Kartica 5 -->
          <div class="card">
            <img class="card-img-top" :src="require('@/assets/sudacMatejaBaltorinic.jpg')" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Suci 5: Kratki opis suca i relevantne informacije.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'Suci',
  }
  </script>
  
  <style scoped>
  .navbar {
    padding: 10px 20px;
    background-color: #000;
  }
  
  .navbar-brand {
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-nav .nav-item .nav-link {
    color: #fff;
    font-weight: normal;
  }
  
  .navbar-nav .nav-item .router-link-active {
    font-weight: bold;
    color: #ff9999; 
  }
  
  .navbar-nav .btn {
    margin-left: 15px;
  }
  
  .suci-container {
    padding: 20px;
    background-image: url('@/assets/logo_savez.jpg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.9);
    background-blend-mode: lighten;
    min-height: calc(100vh - 56px); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .suci-container h1 {
    font-size: 3rem;
    font-weight: bold;
    color: black;
    margin-bottom: 2rem; 
  }
  
  .card-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: center; 
    padding: 1rem;
    width: 100%; 
    max-width: 1200px;
  }
  
  .card {
    width: 10rem; 
    flex: 0 0 auto;
  }
  
  .card-img-top {
    height: 180px;
    object-fit: cover;
  }
  
  .card-body {
    background-color: #f8f9fa;
  }
  
  .center-card {
    order: 0; 
  }
  </style>
  