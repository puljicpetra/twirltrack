<template>
  <div class="home">
    <div class="content-wrapper">
      <div class="left-section">
        <img alt="Logo" src="@/assets/logo_savez.jpg" class="logo">
        <HelloWorld msg="Dobrodošli u TwirlTrack!"/>
      </div>
      <div class="divider"></div>
      <div class="right-section">
        <h1 class="page-title">Registracija</h1> 
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email adresa</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unisite email adresu">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Lozinka</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Unesite lozinku">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Ponovite lozinku</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Ponovite lozinku">
          </div>
          <button type="submit" class="btn btn-primary">Kreiraj račun</button>
          <router-link to="/login" class="btn btn-secondary">Imaš račun? Prijava</router-link>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
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
  width: 200px;
  height: 200px;
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
