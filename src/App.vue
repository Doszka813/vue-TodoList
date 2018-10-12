<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import ToDos from './components/ToDos.vue'

export default {
  name: 'app',
  components: {
    ToDos
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');


body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  background-color: #323333;
  color: rgb(110, 84, 204);
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  margin-right: 15px;
}
</style>
