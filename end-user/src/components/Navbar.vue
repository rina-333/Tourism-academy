<template>
  <nav class="navbar sticky-top navbar-expand-sm navbar-custom">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand"><img src="@/assets/navbar-brand-new.png" height="65" alt="logo-APB"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"><font-awesome-icon :icon="['fas', 'bars']" size="lg" /></span>
        </button>
        <div class="collapse navbar-collapse m-4 ps-4" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link ms-4 text-white">Home</router-link>
            </li>
            <li class="nav-item-dropdown">
              <a href="#" class="nav-link dropdown-toggle px-4 text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profil</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/sejarah" class="dropdown-item">Sejarah</router-link>
                <router-link to="/visi" class="dropdown-item">Visi dan Misi</router-link>
                <router-link to="/struktur" class="dropdown-item">Struktur Organisasi</router-link>
                <router-link to="/fasilitas" class="dropdown-item">Fasilitas</router-link>
                <router-link to="/lambang" class="dropdown-item">Lambang / Logo</router-link>
              </div>
            </li>
            <li class="nav-item-dropdown">
              <a href="#" class="nav-link dropdown-toggle px-4 text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Program Studi</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/perhotelan" class="dropdown-item">D - 3 Perhotelan</router-link>
                <router-link to="/wisata" class="dropdown-item">Usaha Perjalanan Wisata</router-link>
                <router-link to="/course" class="dropdown-item">Hotel Course Program</router-link>
              </div>
            </li>
            <li class="nav-item-dropdown">
              <a href="#" class="nav-link dropdown-toggle px-4 text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Layanan</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/soon" class="dropdown-item">Siakad</router-link>
                <router-link to="/soon" class="dropdown-item">E-journal</router-link>
                <router-link to="/soon" class="dropdown-item">Pustaka Digital</router-link>
                <router-link to="/" class="dropdown-item">Alumni</router-link>
                <router-link to="/soon" class="dropdown-item">Pendaftaran Mahasiswa Baru</router-link>
              </div>
            </li>
            <li class="nav-item-dropdown">
              <a href="#" class="nav-link dropdown-toggle px-4 text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Berita</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/news" class="dropdown-item">Berita</router-link>
                <router-link to="/events" class="dropdown-item">Event</router-link>
              </div>
            </li>
            <li class="nav-item-dropdown">
              <a href="#" class="nav-link dropdown-toggle px-4 text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kontak</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/hubungi" class="dropdown-item">Hubungi Kami</router-link>
                <router-link to="/saran" class="dropdown-item">Kritik dan Saran</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/soon" class="nav-link ms-4 text-white">Pendaftaran</router-link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
