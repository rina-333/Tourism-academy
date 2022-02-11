<template>
  <div>
    <h3 class="toCapitalFirst"> {{ detail.title }} <span><h6><a href="" @click.prevent="swall('editTitle', detail.title)">Edit Judul</a></h6></span></h3>
    <h6> {{ detail.date | formatDate }} </h6>
    <span><h6><a href="" @click.prevent="swall('editDate', '')">Edit Tanggal</a></h6></span>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="example example-cover">
      <img class="img-fluid img-small" :src="detail.image_url" alt=""/>
      <span><h6><a href="" @click.prevent="swall('editImage', '')">Edit Image</a></h6></span>
        </div>
      </div>
    </div>
    <div>
      <p class="small-text"> {{ detail.description }} </p>
      <span><h6><a href="" @click.prevent="swall('editDescription', detail.description)">Edit Isi</a></h6></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailList',
  props: {
    tile: {
      type: String,
      default () {
        return ''
      }
    },
    detail: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    sendPath () {
      console.log(this.$route.path)
      const payload = this.$route.path
      this.$store.commit('GETPATH', payload)
    },
    swall (toPage, payload) {
      console.log(payload, '>>>>payload untuk input')
      this.$store.dispatch(toPage, payload)
    }
  },
  created () {
    this.sendPath()
  }
  // [
  //   'tile', 'detail'
  // ]
  // mounted () {
  //   console.log(this.detail, '<<<<< props')
  // }
}
</script>

<style>
.toCapitalFirst {
  text-transform: capitalize;
}
.example {
  margin: 1em 0;
  text-align: center;
}

.example .img-small {
  width: 200vw;
  height: 45vw;
}

.example-cover img {
  object-fit: cover;
}

.small-text {
  font-size: 13px;
}
</style>
