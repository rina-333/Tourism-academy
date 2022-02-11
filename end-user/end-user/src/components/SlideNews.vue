<template>
  <div class="container-fluid more-top">
    <div class="row">
      <div class="col-md-12">
        <div class="card box-simple border-0">
          <h2>Berita Terbaru</h2>
          <div class="mt-5 mb-5">
            <div class="row row-cols-1 row-cols-md-3 g-5 mt-2 px-4">
              <CardSlide class="mb-4" v-for="each in dataFilter"
              :key="each.id"
              :content="each"
              path="news"
              />
            </div>
            <!-- Batasi from the value where its came from -->
            <button class="btn btn-primary" v-if="dataNews.length > 6 && limit < dataNews.length" @click="limit*=2">Muat Lebih Banyak</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSlide from '@/components/CardSlide.vue'

export default {
  name: 'SlideNews',
  props: {
    dataNews: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      limit: 6
    }
  },
  components: {
    CardSlide
  },
  computed: {
    dataFilter () {
      const data = [...this.dataNews]
      data.sort((a, b) => {
        const da = new Date(a.date)
        const db = new Date(b.date)
        return db - da
      })
      return data ? data.slice(0, this.limit) : data
    }
  }
}
</script>

<style>

</style>
