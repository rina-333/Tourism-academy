<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <h3 class="text-dark text-center animated slideInLeft">
              <DetailList tile="Berita"
              :detail="news.news"
              />
            </h3>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import DetailList from '@/components/DetailList.vue'

export default {
  name: 'DetailNews',
  components: {
    DetailList
  },
  computed: {
    news () {
      // console.log(this.$store.state.newsSelected, '>>>ini news selected di computed')
      return this.$store.state.newsSelected
    }
  },
  methods: {
    sendId () {
      const payload = this.$route.params.id
      // console.log(this.$route.params.id, '>>>>> ini route besar')
      // console.log(payload, '>>>payloaddddd di methods')
      this.$store.commit('GETIDSELECTED', payload)
    },
    fetchNewsSelected () {
      this.$store.dispatch('getNewsSelected')
    }
  },
  created () {
    this.sendId()
    this.fetchNewsSelected()
  }
}
</script>

<style>

</style>
