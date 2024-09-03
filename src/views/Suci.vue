<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">twirltrack</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto">
            <li class="nav-item active">
              <router-link to="/suci" class="nav-link">Suci</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Popis natjecatelja</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Prijava na natjecanje</a>
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
        <!-- Dodajte sadržaj vezan uz suce ovdje -->
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
  }
  
  .navbar-nav .nav-item .nav-link {
    color: #fff;
  }
  
  .navbar-nav .btn {
    margin-left: 15px;
  }
  
  .suci-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    background-image: url('@/assets/logo_savez.jpg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    background-blend-mode: lighten;
  }
  
  .suci-container h1 {
    font-size: 3rem;
    font-weight: bold;
    color: black;
  }
  </style>
  