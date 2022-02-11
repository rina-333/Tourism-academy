<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <h3 class="text-dark text-center animated slideInLeft">
              <DetailList tile="Event"
              :detail="events.event"
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
  name: 'DetailEvent',
  components: {
    DetailList
  },
  computed: {
    events () {
      // console.log(this.$store.state.eventsSelected, '>>>ini events selected di computed')
      return this.$store.state.eventsSelected
    }
  },
  methods: {
    sendId () {
      const payload = this.$route.params.id
      // console.log(this.$route.params.id, '>>>>> ini route besar')
      // console.log(payload, '>>>payloaddddd di methods')
      this.$store.commit('GETIDSELECTED', payload)
    },
    fetchEventsSelected () {
      this.$store.dispatch('getEventsSelected')
    }
  },
  created () {
    this.sendId()
    this.fetchEventsSelected()
  }
}
</script>

<style>

</style>
