<template>
  <div>
    <div class="row g-0 mt-5 bg-light shadow-lg position-relative justify-content-center align-items-center hover-zoomin">
      <div class="col-md-4 mb-md-0 p-md-3">
        <img :src="content.image_url" class="card-img-top img-thumbnail img-fluid w-100" alt="photo of list" style="width: auto; height: 17rem; object-fit: cover;">
      </div>
      <div class="col-md-6 p-4 ps-md-0">
        <h5 class="mt-0 fw-bolder fs-4"> {{ content.title }} </h5>
        <p class="text-blue text-small"> {{ content.date | formatDate }} </p>
        <p class="fs-6 d-inline-block text-truncate" style="max-width: 200px"> {{ content.description }}<br/> </p>
        <p><button class="btn btn-primary custom-color text-white stretched-link" @click.prevent="changePage(`${$route.path}/${content.id}`)">Baca Selengkapnya</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    content: {
      type: Object,
      default () {
        return {}
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

</style>
