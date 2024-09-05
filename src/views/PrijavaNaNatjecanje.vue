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
          <li class="nav-item active">
            <router-link to="/prijava-na-natjecanje" class="nav-link">Prijava na natjecanje</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="btn btn-outline-light" type="button" @click="logout">Odjava</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="prijava-na-natjecanje-container">
      <h1>Prijava na natjecanje</h1>
      <div class="button-container">
        <router-link class="button-link" to="/prijava-za-neformaciju">
          <button class="btn btn-black">Prijava mažoretkinje za neformaciju</button>
        </router-link>
        <router-link class="button-link" to="/popis-prijavljenih-neformacija">
          <button class="btn btn-light btn-text-black">Popis prijavljenih neformacija</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
  name: 'PrijavaNaNatjecanje',
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.$router.replace('/login');
      } catch (error) {
        console.error('Greška prilikom odjave:', error);
      }
    }
  }
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

.prijava-na-natjecanje-container {
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

.prijava-na-natjecanje-container h1 {
  font-size: 3rem;
  font-weight: bold;
  color: black;
}

.button-container {
  margin-top: 20px;
  display: flex;
  gap: 20px; 
}

.button-link {
  text-decoration: none; 
}

.button-container .btn {
  width: 250px; 
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0;
  border: none;
  color: white;
  text-align: center;
  text-transform: none;
  font-weight: normal;
}

.btn-black {
  background-color: #000;
}

.btn-light {
  background-color: #ccc; 
}

.btn-text-black {
  color: #000 !important; 
}
</style>
