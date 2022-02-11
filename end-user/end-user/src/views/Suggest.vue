<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <h3 class="text-dark text-center animated slideInLeft">Kritik dan Saran</h3>
            <h6 class="text-center animated slideInLeft">Kritik dan Saran dari anda sangat kami butuhkan untuk pengembangan kedepannya</h6>
            <form @submit="sendData">
              <div class="row mt-5">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email :</label>
                <div class="col-sm-10">
                  <input type="email" v-model="form.email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="contoh: apb@gmail.com">
                  <div id="emailHelp" class="form-text align-left">Tinggalkan sebuah kontak agar kami dapat menanggapi pesan anda jika dibutuhkan.</div>
                </div>
              </div>
              <div class="row mt-3">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Nama :</label>
                <div class="col-sm-10">
                  <input type="text" v-model="form.nama" class="form-control form-control-lg" id="colFormLabelLg" placeholder="masukkan nama anda">
                </div>
              </div>
              <div class="row mt-3 mb-5">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Saran :</label>
                <div class="col-sm-10">
                  <textarea v-model="form.description" class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" placeholder="Masukkan pesan anda disini">Pesan</textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Saran',
  data () {
    return {
      form: {
        nama: '',
        email: '',
        description: ''
      }
    }
  },
  methods: {
    sendData (event) {
      event.preventDefault()
      const payload = {
        name_suggest: this.form.nama,
        desc_suggest: this.form.description,
        email_suggest: this.form.email
      }
      this.$store.dispatch('addSuggest', payload)
    }
  }
}
</script>

<style>

</style>
