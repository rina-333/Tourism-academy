<template>
  <div>
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Social Media</h3>
              <ul>
                <li><a href="https://www.instagram.com/akparbundapdg"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" fixed-width />akparbundapdg</a></li>
                <li><a href="https://www.facebook.com/akparbundapdg"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" fixed-width />akparbundapdg</a></li>
                <li><a href="https://www.twitter.com/akparbundapdg"><font-awesome-icon :icon="['fab', 'twitter']" size="lg" fixed-width />akparbundapdg</a></li>
                <li><a href="https://www.youtube.com/channel/UCUVxdqzebvebpnCnO9KCm2Q"><font-awesome-icon :icon="['fab', 'youtube']" size="lg" fixed-width />akparbundapdg</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>Pendaftaran Mahasiswa</h3>
              <ul>
                <li><router-link to="/soon">PMB - APB</router-link></li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Akademi Pariwisata Bunda</h3>
              <p>JL. Arif Rahman Hakim No. 57. Kelurahan Ranah Parak Rumbio, Kecamatan Padang Selatan. Kota Padang, Provinsi Sumatera Barat</p>
              <p>Kode Pos : 25211, Telp : (0751)34212</p>
            </div>
          </div>
            <p class="copyright">Portfolio by © RINA</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.text-faded {
  color: rgb(186, 186, 190);
  margin-bottom: 2px !important;
}
</style>
