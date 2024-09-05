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
          <li class="nav-item" v-if="user">
            <span class="nav-link text-light email-link">Korisnik: {{ user.email }}</span>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-light" type="button" @click="logout">Odjava</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="popis-natjecatelja-container">
      <h1>Popis natjecatelja</h1>
      <div class="card-row">
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/1_pula.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Pulske mažoretkinje</span><br>
              PULA
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/2_vukovar.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoretkinje Grada Vukovara</span><br>
              VUKOVAR
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/3_nedelisce.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoretkinje Nedelišća</span><br>
              NEDELIŠĆE
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/4_unitys.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoret klub Unity S</span><br>
              SAMOBOR
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/5_vrbovec.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoretkinje Vrbovec</span><br>
              VRBOVEC
            </p>
          </div>
        </div>
      </div>
      <div class="card-row">
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/6_ogulin.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoretkinje DND Ogulin</span><br>
              OGULIN
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/7_krasic.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Krašićke mažoretkinje</span><br>
              KRAŠIĆ
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/8_barban.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Barbanske mažoretkinje</span><br>
              BARBAN
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/9_malasubotica.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoretkinje Male Subotice</span><br>
              MALA SUBOTICA
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/10_krk.jpg')" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">
              <span class="card-name">Mažoretkinje otoka Krka</span><br>
              OTOK KRK
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
  name: 'PopisNatjecatelja',
  data() {
    return {
      user: null
    };
  },
  created() {
    this.user = auth.currentUser;
    this.unsub = auth.onAuthStateChanged(user => {
      this.user = user;
    });
  },
  beforeDestroy() {
    if (this.unsub) this.unsub();
  },
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

.email-link {
  text-decoration: underline;
}

.popis-natjecatelja-container {
  display: flex;
  flex-direction: column;
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
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
}

.card {
  width: calc(20% - 1rem);
  height: 250px; 
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-img-top {
  height: 150px; 
  object-fit: cover;
  width: 100%;
}

.card-body {
  background-color: #f8f9fa;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-text {
  font-size: 1rem;
  text-align: center;
}

.card-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>
