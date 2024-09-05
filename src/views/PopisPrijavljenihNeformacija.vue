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
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Datum rođenja</th>
              <th>Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prijava in prijave" :key="prijava.id">
              <td>{{ prijava.ime }}</td>
              <td>{{ prijava.prezime }}</td>
              <td>{{ prijava.datum }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deletePrijava(prijava.id)">Obriši</button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link to="/prijava-za-neformaciju">
          <button class="btn btn-secondary mt-3">Povratak na prijavu</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from "@/firebase";
  import { signOut } from "firebase/auth";
  import { db } from "@/firebase";
  import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
  
  export default {
    name: 'PopisPrijavljenihNeformacija',
    data() {
      return {
        user: auth.currentUser,
        prijave: []
      };
    },
    methods: {
      async fetchPrijave() {
        try {
          const querySnapshot = await getDocs(collection(db, "prijave"));
          this.prijave = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
          console.error('Greška prilikom učitavanja prijava:', error);
        }
      },
      async deletePrijava(id) {
        try {
          await deleteDoc(doc(db, "prijave", id));
          this.prijave = this.prijave.filter(prijava => prijava.id !== id);
          alert("Prijava je uspješno obrisana!");
        } catch (error) {
          console.error('Greška prilikom brisanja prijave:', error);
          alert("Došlo je do greške prilikom brisanja prijave.");
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
    },
    created() {
      this.fetchPrijave();
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
  
  .table {
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
  }
  
  .table th, .table td {
    text-align: center;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }
  </style>
  