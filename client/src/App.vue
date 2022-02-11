<template>
  <div id="app">
    <Navbar v-if="$route.name != 'Login'"></Navbar>
    <div>
    <router-view/>

    </div>
  </div>
</template>

<script>
// import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-custom {
background-color: #1a2c43f8;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 13px;
}

.box-simple {
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 0px;
  padding: 5%;
}

.txtDiv {
  position: absolute;
  left: 15px;
  top: 0px;
  background: #1a2c43f8;
  color: #fff;
}

.stretched-link {
  text-decoration: none;
  color:black
}
</style>
