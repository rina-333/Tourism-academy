<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <router-link to="/events/add" class="btn btn-primary text-white" style="max-width: 100px">+ Add</router-link>
            <h3 class="text-dark text-center animated slideInLeft">
              <TableList msg="Event"
              :data="event.data"
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
  name: 'Events',
  components: {
    TableList
  },
  computed: {
    event () {
      return this.$store.state.event
    }

  },
  methods: {
    fetchEvent () {
      this.$store.dispatch('getEvent')
    }
  },
  created () {
    this.fetchEvent()
  }
}
</script>
