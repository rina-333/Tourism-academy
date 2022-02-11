<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand"><img src="@/assets/navbar-brand-new.png" height="65" alt="logo-APB"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"><font-awesome-icon :icon="['fas', 'bars']" size="lg" /></span>
        </button>
        <div class="collapse navbar-collapse m-4 ps-4" id="navbarSupportedContent">
          <router-link to="/" class="nav-link text-white">Home</router-link>
          <router-link to="/news" class="nav-link text-white">Berita</router-link>
          <router-link to="/events" class="nav-link text-white">Event</router-link>
          <router-link to="/suggest" class="nav-link text-white">Saran</router-link>
          <a href="" @click.prevent="logout" to="logout" class="nav-link text-thite">Logout</a>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
