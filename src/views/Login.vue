<template>
  <div class="about">
    <h1 class="page-title">Prijava</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email adresa</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesite email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Lozinka</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Unesite lozinku">
      </div>
      <button type="submit" class="btn btn-primary">Prijava</button>
      <button type="button" class="btn btn-secondary">Nemaš račun? Registracija</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
.about {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  margin-bottom: 30px; 
  text-align: center;
  font-weight: 700;
}

.form-group {
  margin-bottom: 20px; 
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
  background-color: #272264; 
  color: white;
  font-weight: 600;
  margin-top: 20px; 
}

.btn-secondary {
  background-color: #bf1e2e; 
  color: white;
  margin-top: 10px; 
}
</style>
