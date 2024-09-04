<template>
  <div id="app">
    <nav v-if="!hideNav">
      <router-link to="/">Registracija</router-link> |
      <router-link to="/login">Prijava</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    hideNav() {
      return this.$route.meta.hideNav;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #bf1e2e;
    }
  }
}
</style>