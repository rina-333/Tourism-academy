<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <router-link to="/news/add" class="btn btn-primary text-white" style="max-width: 100px">+ Add</router-link>
            <!-- <button class="btn btn-primary" @click.prevent="/news/add" style="max-width: 100px">+ Add</button> -->
            <h3 class="text-dark text-center animated slideInLeft">
              <TableList msg="Berita"
              :data="news.data"
              />
            </h3>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TableList from '@/components/TableList.vue'

export default {
  name: 'News',
  components: {
    TableList
  },
  computed: {
    news () {
      // console.log(this.$store.state.news)
      // const payload = this.$store.state.news
      // console.log(payload, '>>>>')
      // console.log(payload.data)
      return this.$store.state.news
    }
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('getNews')
    }
  },
  created () {
    this.fetchNews()
  }
}
</script>
