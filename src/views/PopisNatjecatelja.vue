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
          <li class="nav-item active">
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
    <div class="popis-natjecatelja-container">
      <h1>Popis natjecatelja</h1>
      <div class="card-row">
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj1.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 1</span><br>
              GRAD 1
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj2.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 2</span><br>
              GRAD 2
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj3.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 3</span><br>
              GRAD 3
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj4.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 4</span><br>
              GRAD 4
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj5.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 5</span><br>
              GRAD 5
            </p>
          </div>
        </div>
      </div>
      <div class="card-row">
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj6.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 6</span><br>
              GRAD 6
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj7.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 7</span><br>
              GRAD 7
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj8.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 8</span><br>
              GRAD 8
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj9.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 9</span><br>
              GRAD 9
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/natjecatelj10.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Natjecatelj 10</span><br>
              GRAD 10
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopisNatjecatelja',
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

.popis-natjecatelja-container {
  display: flex;
  flex-direction: column;
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

.popis-natjecatelja-container h1 {
  font-size: 3rem;
  font-weight: bold;
  color: black;
  margin-bottom: 2rem;
}

.card-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center; 
  padding: 1rem;
  width: 100%; 
  max-width: 1200px;
}

.card {
  width: 12rem; /* Povećanje širine kartice */
  flex: 0 0 auto;
}

.card-img-top {
  height: 200px; /* Malo povećana visina slike */
  object-fit: cover;
}

.card-body {
  background-color: #f8f9fa;
  padding: 10px; /* Dodavanje malo više prostora unutar tijela kartice */
}

.card-text {
  margin: 0;
}

.card-name {
  font-weight: bold;
  font-size: 1.2rem; /* Malo povećanje veličine fonta za ime mažoretkinje */
}
</style>
