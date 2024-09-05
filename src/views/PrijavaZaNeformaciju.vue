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
          <li class="nav-item" v-if="user">
            <span class="nav-link text-light email-link">Korisnik: {{ user.email }}</span>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-light" type="button" @click="logout">Odjava</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="prijava-na-natjecanje-container">
      <h1>Prijava mažoretkinje za neformaciju</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="ime">Ime</label>
          <input type="text" id="ime" v-model="ime" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="prezime">Prezime</label>
          <input type="text" id="prezime" v-model="prezime" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="datum">Datum rođenja</label>
          <input type="date" id="datum" v-model="datum" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Pošalji prijavu</button>
      </form>
      <router-link to="/popis-prijavljenih-neformacija">
        <button class="btn btn-secondary mt-3">Pogledaj prijavljene mažoretkinje</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore"; 

export default {
  name: 'PrijavaZaNeformaciju',
  data() {
    return {
      ime: '',
      prezime: '',
      datum: '',
      user: auth.currentUser
    };
  },
  methods: {
  async submitForm() {
    console.log("Submit form called");

    try {
      await addDoc(collection(db, "prijave"), {
        ime: this.ime,
        prezime: this.prezime,
        datum: this.datum,
        korisnik: this.user ? this.user.email : 'Anonimno'
      });

      console.log("Prijava uspješno poslana!");
      this.ime = '';
      this.prezime = '';
      this.datum = '';

      alert("Prijava je uspješno poslana!");
    } catch (error) {
      console.error("Greška prilikom dodavanja prijave: ", error);
      alert("Došlo je do greške prilikom slanja prijave.");
    }
  },
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

.email-link {
  text-decoration: underline;
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

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  max-width: 400px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
</style>
