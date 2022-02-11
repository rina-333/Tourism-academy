<template>
  <section>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <h2>Kolom Berita</h2>
              <CardList class="mb-4" v-for="each in news"
              :key="each.id"
              :content="each"
              />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import CardList from '@/components/CardList.vue'

export default {
  name: 'News',
  data () {
    return {
      dataNews: []
    }
  },
  components: {
    CardList
  },
  computed: {
    news () {
      const data = [this.$store.state.news]
      // Sort by Date
      return data[0].data.sort((a, b) => {
        const da = new Date(a.date)
        const db = new Date(b.date)
        return db - da
      })
    }
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('getAllNews')
    }
  },
  created () {
    this.fetchNews()
  }
}
</script>

<style>

</style>
