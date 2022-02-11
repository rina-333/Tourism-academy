<template>
  <section>
      <div class="container-fluid">
        <article class="row">
          <div class="col-md-12">
            <div class="card shadow-lg box-simple">
              <h2>Kolom Agenda</h2>
              <CardList class="mb-4" v-for="each in events"
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
  name: 'Events',
  data () {
    return {
      dataEvents: []
    }
  },
  components: {
    CardList
  },
  computed: {
    events () {
      const data = [this.$store.state.events]
      return data[0].data.sort((a, b) => {
        const da = new Date(a.date)
        const db = new Date(b.date)
        return db - da
      })
    }
  },
  methods: {
    fetchEvents () {
      this.$store.dispatch('getAllEvents')
    }
  },
  created () {
    this.fetchEvents()
  }
}
</script>

<style>

</style>
