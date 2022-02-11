<template>
  <div>
    <h1>Tambah {{ tile }}</h1>
    <b-form class="mt-4" @submit="sendData" @reset="onReset">
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-large">Judul :</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.title"
            size="lg"
            placeholder="Masukkan Judul"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1 mt-4">
        <b-col sm="2">
          <label>Gambar :</label>
        </b-col>
        <b-col sm="10" class="align-left">
          <b-form-file
            accept=".jpg"
            v-model="form.image_url"
            :state="Boolean(form.image_url)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-col>
      </b-row>
      <b-row class="mt-4 mb-4">
        <b-col sm="2">
          <label for="textarea-large">Deskripsi :</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            v-model="form.description"
            size="lg"
            rows="8"
            placeholder="Tulis Deskripsi Disini"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-button type="submit" class="btn-primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  title: 'AddList',
  props: {
    tile: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      form: {
        title: '',
        image_url: null,
        description: ''
      }
    }
  },
  methods: {
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.image_url = null
      this.form.description = ''
    },
    sendPath () {
      // event.preventDefault()
      console.log(this.$route.path, '>>>>ini route path')
      const payload = this.$route.path
      this.$store.commit('GETPATHTOADD', payload)
    },
    sendData (event) {
      event.preventDefault()
      const payload = {
        title: this.form.title,
        image_url: this.form.image_url,
        description: this.form.description
      }
      console.log(payload, 'ini payload di components')
      this.$store.dispatch('add', payload)
    }
  },
  created () {
    this.sendPath()
  }
}
</script>

<style>
.align-left {
  text-align: left;
}
</style>
