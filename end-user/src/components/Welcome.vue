<template>
  <header class="mb-5">
      <!-- Sesungguhnya div ini intentionally blank. Untuk create transparent black overlay di video  -->
        <div class="overlay"></div>
        <!-- The HTML5 video element yang create the background video on the header -->
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="@/assets/video-cover.mp4" type="video/mp4">
        </video>
        <!-- The header content -->
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white animated flip">
              <img src="@/assets/logo-apb.png" alt="Logo-APB" srcset="@/assets/logo-apb.png" height="150px" style="opacity: 0.90;">
              <h1 class="display-3">Akademi Pariwisata Bunda</h1>
              <p class="lead mb-0">Mencetak Profesional Siap Kerja di Industri Pariwisata</p>
            </div>
          </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
