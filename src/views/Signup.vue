<template>
  <div class="home">
    <div class="content-wrapper">
      <div class="left-section">
        <img alt="Logo" src="@/assets/logo_savez.jpg" class="logo">
      </div>
      <div class="divider"></div>
      <div class="right-section">
        <h1 class="page-title">Registracija</h1> 
        <form>
          <div class="form-group">
            <label for="emailInput">Email adresa</label>
            <input 
              type="email" 
              v-model="username"
              class="form-control" 
              id="emailInput" 
              aria-describedby="emailHelp" 
              placeholder="Unesite email adresu"
            >
          </div>
          <div class="form-group">
            <label for="passwordInput">Lozinka</label>
            <input 
              type="password" 
              v-model="password"
              class="form-control" 
              id="passwordInput" 
              placeholder="Unesite lozinku"
            >
          </div>
          <div class="form-group">
            <label for="passwordRepeatInput">Ponovite lozinku</label>
            <input 
              type="password" 
              v-model="passwordRepeat"
              class="form-control" 
              id="passwordRepeatInput" 
              placeholder="Ponovite lozinku"
            >
          </div>
          <button type="button" @click="signup" class="btn btn-primary">Kreiraj račun</button>
          <router-link to="/login" class="btn btn-secondary">Imaš račun? Prijava</router-link>
        </form>
      </div>
    </div>
  </div>
</template>


<script> 
import { auth } from "@/firebase";  
import { createUserWithEmailAndPassword } from "firebase/auth"; 

export default { 
  name: "Signup", 
  data() { 
    return { 
      username: "", 
      password: "", 
      passwordRepeat: "", 
    }; 
  }, 
  methods: { 
    async signup() { 
      if (this.password !== this.passwordRepeat) { 
        alert("Lozinke nisu jednake"); 
        return; 
      } 

      if (this.password.length < 6) { 
        alert("Lozinka mora sadržavati minimalno 6 znakova"); 
        return; 
      } 

      try { 
        await createUserWithEmailAndPassword(auth, this.username, this.password); 
        alert("Korisnik je uspješno registriran"); 
      } catch (error) { 
        console.error("Pogreška pri registraciji korisnika:", error); 
        alert(error.message);  
      } 
    }, 
  } 
}; 
</script> 


<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
}

.left-section, .right-section {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-section {
  margin-left: 40px; 
}

.logo {
  width: 300px;
  height: 300px;
  display: block;
  margin: 0 auto;
}

.divider {
  width: 2px;
  background-color: #ccc;
  height: 70%;
  margin: 0 20px;
}

.page-title {
  margin-bottom: 30px; 
  text-align: center;
  font-weight: 700; 
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  text-align: left;
  width: 100%;
  font-weight: 600; 
}

.form-group input {
  width: 100%;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}

.btn-primary {
  background-color: #bf1e2e;
  color: white;
  font-weight: 600; 
  margin-top: 20px; 
}

.btn-secondary {
  background-color: #272264;
  color: white;
  margin-top: 10px; 
}
</style>