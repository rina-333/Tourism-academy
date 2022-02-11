import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: '',
    events: '',
    selected: {}
  },
  mutations: {
    GETALLNEWS (state, payload) {
      state.news = payload
    },
    GETALLEVENTS (state, payload) {
      state.events = payload
    },
    SENDSELECTEDEVENT (state, payload) {
      state.selected = payload.event
    },
    SENDSELECTEDNEWS (state, payload) {
      state.selected = payload.news
    }
  },
  actions: {
    getAllNews ({ commit }) {
      axios({
        url: '/news',
        method: 'get'
      })
        .then(({ data }) => {
          commit('GETALLNEWS', data)
        })
        .catch(err => {
          throw (err)
        })
    },
    getAllEvents ({ commit }) {
      axios({
        url: '/events',
        method: 'get'
      })
        .then(({ data }) => {
          commit('GETALLEVENTS', data)
        })
        .catch(err => {
          throw (err)
        })
    },
    addSuggest ({ state }, payload) {
      console.log(payload, '>>>this payload on awal action')
      axios({
        url: '/suggest',
        method: 'post',
        data: { ...payload }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Terima Kasih Atas Saran Anda',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...Gagal',
            text: 'Mohon periksa alamat email yang dimasukkan sesuai format'
          })
        })
    },
    getSelected ({ commit }, payload) {
      const path = payload
      axios.get(`${path}`)
        .then(({ data }) => {
          if (path.slice(0, 7) === '/events') {
            commit('SENDSELECTEDEVENT', data)
          } else {
            commit('SENDSELECTEDNEWS', data)
          }
          router.push(`${path}`)
        })
        .catch(err => {
          Swal.showValidationMessage(
            `Request failed: ${err}`
          )
        })
    }
  },
  modules: {
  }
})
