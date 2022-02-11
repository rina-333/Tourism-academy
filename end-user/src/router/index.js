import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sejarah from '../views/Sejarah.vue'
import Visi from '../views/Visi.vue'
import Struktur from '../views/Struktur.vue'
import Fasilitas from '../views/Fasilitas.vue'
import Lambang from '../views/Lambang.vue'
import Perhotelan from '../views/Perhotelan.vue'
import Wisata from '../views/Wisata.vue'
import Course from '../views/Course.vue'
import Hubungi from '../views/Hubungi.vue'
import Saran from '../views/Suggest.vue'
import Soon from '../views/Soon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'Berita',
    component: () => import('../views/News.vue')
  },
  {
    path: '/events',
    name: 'Agenda',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/sejarah',
    name: 'Sejarah',
    component: Sejarah
  },
  {
    path: '/visi',
    name: 'Visi',
    component: Visi
  },
  {
    path: '/struktur',
    name: 'Struktur',
    component: Struktur
  },
  {
    path: '/fasilitas',
    name: 'Fasilitas',
    component: Fasilitas
  },
  {
    path: '/lambang',
    name: 'Lambang',
    component: Lambang
  },
  {
    path: '/perhotelan',
    name: 'Perhotelan',
    component: Perhotelan
  },
  {
    path: '/wisata',
    name: 'Wisata',
    component: Wisata
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/hubungi',
    name: 'Hubungi',
    component: Hubungi
  },
  {
    path: '/saran',
    name: 'Saran',
    component: Saran
  },
  {
    path: '/news/:id',
    name: 'DetailNews',
    component: () => import('../components/DetailCard.vue')
  },
  {
    path: '/events/:id',
    name: 'DetailEvents',
    component: () => import('../components/DetailCard.vue')
  },
  {
    path: '/soon',
    name: 'Soon',
    component: Soon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
