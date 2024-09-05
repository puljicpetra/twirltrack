<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">twirltrack</a>
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
    <div class="home-container">
      <div class="content">
        <h1>Državno prvenstvo</h1>
        <h1>mažoretkinja</h1>
        <h1>2025.</h1>
        <p>3. – 5. svibnja</p>
        <p>
          <span class="countdown-label">Vidimo se za:</span>
          <span class="countdown-text">{{ countdown }}</span>
        </p> 
      </div>
      <div class="image-container">
        <img src="@/assets/sv_martin.jpg" alt="Toplice Sveti Martin" @click="redirectToWebsite" />
        <div class="image-text">
          <p class="title">Toplice Sveti Martin,</p>
          <p class="subtitle">Izvorska 3, 40313 Sveti Martin Na Muri</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
  name: 'Home',
  data() {
    return {
      user: null,
      countdown: "",
    };
  },
  created() {
    this.user = auth.currentUser;
    this.unsub = auth.onAuthStateChanged(user => {
      this.user = user;
    });

    this.startCountdown();
  },
  beforeDestroy() {
    if (this.unsub) this.unsub();
    if (this.interval) clearInterval(this.interval);
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.$router.replace('/login');
      } catch (error) {
        console.error('Greška prilikom odjave:', error);
      }
    },
    redirectToWebsite() {
      window.location.href = 'https://www.termesvetimartin.com/hr/';
    },
    startCountdown() {
      const eventDate = new Date("2025-05-03T00:00:00").getTime();
      
      this.interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
          clearInterval(this.interval);
          this.countdown = "Državno prvenstvo je počelo!";
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          this.countdown = `${days} dana, ${hours} sati, ${minutes} minuta, ${seconds} sekundi`;
        }
      }, 1000);
    }
  }
};
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

.email-link {
  text-decoration: underline;
}

.home-container {
  display: flex;
  justify-content: space-between;
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

.content {
  color: black;
  z-index: 2;
  text-align: left;
  margin-left: 10%; 
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
  text-align: right; 
  margin-right: 10%; 
  z-index: 2;
}

.image-container img {
  width: 100%;
  border-radius: 15px;
  cursor: pointer; 
}

.image-text {
  margin-top: 10px;
  text-align: right; 
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

.countdown-label {
  color: black; 
  font-size: 1.5rem;
}

.countdown-text {
  color: #ff6961; 
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 5px;
}
</style>
