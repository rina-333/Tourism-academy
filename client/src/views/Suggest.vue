<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <button class="btn btn-primary" style="max-width: 100px">+ Add</button>
            <h3 class="text-dark text-center animated slideInLeft">
              <TableSuggest msg="Saran"
              :data="suggest.data"
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
import TableSuggest from '@/components/TableSuggest.vue'

export default {
  name: 'Suggest',
  components: {
    TableSuggest
  },
  computed: {
    suggest () {
      // console.log(this.$store.state.news)
      return this.$store.state.suggest
    }

  },
  methods: {
    fetchSuggest () {
      this.$store.dispatch('getSuggest')
    }
  },
  created () {
    this.fetchSuggest()
  }
}
</script>
