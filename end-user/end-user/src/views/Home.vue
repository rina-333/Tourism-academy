<template>
  <div>
    <Welcome/>
    <Greeting/>
    <SlideNews :dataNews="news.data" />
    <SlideEvents :dataEvents="event.data" />
    <Testimoni/>
    <Map/>
    <Footer/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Greeting from '@/components/Greeting.vue'
import SlideNews from '@/components/SlideNews.vue'
import SlideEvents from '@/components/SlideEvents.vue'
import Testimoni from '@/components/Testimoni.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Greeting,
    SlideNews,
    SlideEvents,
    Testimoni,
    Map,
    Footer
  },
  computed: {
    news () {
      return this.$store.state.news
    },
    event () {
      return this.$store.state.events
    }
  },
  methods: {
    fetchNews () {
      this.$store.dispatch('getAllNews')
    },
    fetchEvents () {
      this.$store.dispatch('getAllEvents')
    }
  },
  created () {
    this.fetchNews()
    this.fetchEvents()
  }
}
</script>
