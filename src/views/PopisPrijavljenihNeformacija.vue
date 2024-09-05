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
            <li class="nav-item" v-if="user">
              <span class="nav-link text-light email-link">Korisnik: {{ user.email }}</span>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-light" type="button" @click="logout">Odjava</button>
            </li>
          </ul>
        </div>
      </nav>
      <div class="popis-prijavljenih-neformacija-container">
        <h1>Popis prijavljenih neformacija</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Datum rođenja</th>
              <th>Korisnik</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prijava in prijave" :key="prijava.id">
              <td>{{ prijava.ime }}</td>
              <td>{{ prijava.prezime }}</td>
              <td>{{ formatDate(prijava.datum) }}</td>
              <td>{{ prijava.korisnik }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from "@/firebase";
  import { signOut } from "firebase/auth";
  import { db } from "@/firebase";
  import { collection, onSnapshot } from "firebase/firestore";
  
  export default {
    name: 'PopisPrijavljenihNeformacija',
    data() {
      return {
        user: auth.currentUser,
        prijave: []
      };
    },
    created() {
      this.fetchPrijave();
    },
    methods: {
      async fetchPrijave() {
        try {
          const prijaveCollection = collection(db, "prijave");
          onSnapshot(prijaveCollection, (snapshot) => {
            this.prijave = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log("Dohvaćene prijave:", this.prijave);
          });
        } catch (error) {
          console.error('Greška prilikom dohvaćanja prijava:', error);
        }
      },
      async logout() {
        try {
          await signOut(auth);
          this.$router.replace('/login');
        } catch (error) {
          console.error('Greška prilikom odjave:', error);
        }
      },
      formatDate(dateString) {
        // Pretpostavljamo da je format datuma "YYYY-MM-DD"
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
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
  
  .popis-prijavljenih-neformacija-container {
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
  
  .popis-prijavljenih-neformacija-container h1 {
    font-size: 3rem;
    font-weight: bold;
    color: black;
  }
  </style>
  