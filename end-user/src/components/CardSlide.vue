<template>
    <div class="col">
      <div class="card h-100 hover-zoomin mx-4">
        <div class="pic position-relative">
          <img :src="content.image_url" class="card-img-top img-fluid" alt="photo of list headline" style="width: auto; height: 17rem; object-fit: cover;">
          <div class="txtDiv p-2">
            <p> {{ content.date | formatDateLabel }} </p>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title text-title toCapitalFirst"> {{ content.title }} </h5>
          <p class="card-text text-description d-inline-block text-truncate" style="max-width: 200px"> {{ content.description }} </p>
        </div>
        <div class="card-footer custom-color">
          <small><button class="btn btn-primary custom-color text-white stretched-link" @click.prevent="changePage(`/${path}/${content.id}`)">Baca Selengkapnya</button></small>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardSlide',
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    },
    path: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    changePage (payload) {
      this.$store.dispatch('getSelected', payload)
    }
  }
}
</script>

<style>
.custom-color {
  background-color: #1a2c43f8 !important;
}

.text-title {
  font-size: 11px;
}

.text-description {
  font-size: 9px;
}

</style>
