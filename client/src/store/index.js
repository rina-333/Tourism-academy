import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    news: '',
    event: '',
    suggest: '',
    idSelected: '',
    newsSelected: '',
    eventsSelected: '',
    pathSelected: '',
    pathAddSelected: ''
  },
  mutations: {
    LOGIN (state, payload) {
      // console.log(payload, '>>ini payload dari mutation')
      state.username = payload
      // state.password = payload
    },
    GETNEWS (state, payload) {
      state.news = payload
      // console.log(state.news.title)
    },
    GETEVENT (state, payload) {
      state.event = payload
    },
    GETSUGGEST (state, payload) {
      state.suggest = payload
      // console.log(payload, '<<<< payload')
    },
    GETIDSELECTED (state, payload) {
      // console.log(payload, '>>id mutation')
      state.idSelected = payload
    },
    GETNEWSSELECTED (state, payload) {
      state.newsSelected = payload
      // console.log(state.newsSelected.news, 'ini title select')
    },
    GETEVENTSSELECTED (state, payload) {
      state.eventsSelected = payload
    },
    GETPATH (state, payload) {
      state.pathSelected = payload
      console.log(payload, '>>>>>payload path di mutation')
    },
    GETPATHTOADD (state, payload) {
      state.pathAddSelected = payload
      console.log(state.pathAddSelected, 'ini di mutation')
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload, '>>>>>>>>>>>>')
      axios({
        url: '/login',
        method: 'post',
        data: { ...payload }
      })
        .then(({ data }) => {
          // console.log(data, ' >>>> ini data')
          localStorage.setItem('access_token', data.access_token)
          context.commit('LOGIN', data)
          router.push('/')
          Swal.fire({
            icon: 'success',
            title: 'berhasil Login!',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Login Gagal',
            text: 'Cek lagi password dan usernamenya ya!',
            confirmButtonColor: '#1a2c43f8'
          })
        })
    },
    getNews ({ commit }) {
      axios({
        url: '/news',
        method: 'get'
      })
        .then(({ data }) => {
          console.log(data, '>>>>>daata di store')
          commit('GETNEWS', data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Data Tidak Ditemukan!'
          })
          console.log(err)
        })
    },
    getEvent ({ commit }) {
      axios({
        url: '/events',
        method: 'get'
      })
        .then(({ data }) => {
          // console.log(data)
          commit('GETEVENT', data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Data Tidak Ditemukan!'
          })
          console.log(err)
        })
    },
    getSuggest ({ commit }) {
      axios({
        url: '/suggest',
        method: 'get',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          // console.log(data, '<<<< data')
          commit('GETSUGGEST', data)
        })
        .catch(err => {
          // console.log('gagal dapat data')
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Data Tidak Ditemukan!'
          })
          console.log(err)
        })
    },
    getNewsSelected ({ state, commit }) {
      // console.log(payload,'>>>>ini payload diterima')
      const id = state.idSelected
      // console.log(id, '>>>>>id di action')
      // console.log(id.id, '>>>>>ini id payload ke store')
      axios({
        url: `/news/${+id}`,
        method: 'get',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          // console.log(data, '>>>ini data di action')
          commit('GETNEWSSELECTED', data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Data Tidak Ditemukan!'
          })
          console.log(err)
        })
    },
    getEventsSelected ({ state, commit }) {
      // console.log(payload,'>>>>ini payload diterima')
      const id = state.idSelected
      // console.log(id, '>>>>>id di action')
      // console.log(id.id, '>>>>>ini id payload ke store')
      axios({
        url: `/events/${+id}`,
        method: 'get',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          // console.log(data, '>>>ini data di action')
          commit('GETEVENTSSELECTED', data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Data Tidak Ditemukan!'
          })
          console.log(err)
        })
    },
    editTitle ({ state }, payload) {
      const path = state.pathSelected
      console.log(payload, 'payload di swall')
      Swal.fire({
        title: 'Judul :',
        input: 'textarea',
        inputValue: payload,
        inputPlaceholder: 'Ketik Disini',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        confirmButtonColor: '#1a2c43f8',
        cancelButtonColor: '#a6a9ad',
        showLoaderOnConfirm: true,
        preConfirm: (title) => {
          // const fullpatch = { ...path }
          console.log(path, '>>>>> this path on preconfirm')
          // console.log(fullpatch, 'ini fullpatch di preconfirm')
          console.log(title, '>>>>ini title dari swall')
          axios({
            url: `${path}/editTitle`,
            method: 'patch',
            headers: { access_token: localStorage.getItem('access_token') },
            data: { title: title }
          })
            .then(({ data }) => {
              console.log(data, '>>>ini data setelah axios di action')
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Berhasil disimpan!',
              showConfirmButton: false,
              timer: 1500
            })
          }
          // const newPath = path.slice(0, path.length - 2)
          // router.push(`${newPath}`)
          router.push(`${path}`).catch(() => {})
        })
    },
    editDate ({ state }) {
      const path = state.pathSelected
      Swal.fire({
        title: 'Tanggal :',
        input: 'textarea',
        inputPlaceholder: 'MM-DD-YYYY',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        confirmButtonColor: '#1a2c43f8',
        cancelButtonColor: '#a6a9ad',
        showLoaderOnConfirm: true,
        preConfirm: (date) => {
          // const fullpatch = { ...path }
          console.log(path, '>>>>> this path on preconfirm')
          // console.log(fullpatch, 'ini fullpatch di preconfirm')
          console.log(date, '>>>>ini title dari swall')
          axios({
            url: `${path}/editDate`,
            method: 'patch',
            headers: { access_token: localStorage.getItem('access_token') },
            data: { date: date }
          })
            .then(({ data }) => {
              console.log(data, '>>>ini data setelah axios di action')
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Berhasil disimpan!',
              showConfirmButton: false,
              timer: 1500
            })
          }
          // const newPath = path.slice(0, path.length - 2)
          // router.push(`${newPath}`)
          router.push(`${path}`).catch(() => {})
        })
    },
    editImage ({ state }) {
      const path = state.pathSelected
      Swal.fire({
        title: 'File :',
        input: 'file',
        inputPlaceholder: 'Pilih File',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        confirmButtonColor: '#1a2c43f8',
        cancelButtonColor: '#a6a9ad',
        showLoaderOnConfirm: true,
        preConfirm: (galeri) => {
          // const fullpatch = { ...path }
          console.log(path, '>>>>> this path on preconfirm')
          // console.log(fullpatch, 'ini fullpatch di preconfirm')
          console.log(galeri, '>>>>ini title dari swall')
          const typeForm = new FormData()
          typeForm.append('galeri', galeri)
          axios({
            url: `${path}/editImage`,
            method: 'patch',
            headers: { access_token: localStorage.getItem('access_token') },
            data: typeForm
          })
            .then(({ data }) => {
              console.log(data, '>>>ini data setelah axios di action')
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Berhasil disimpan!',
              showConfirmButton: false,
              timer: 1500
            })
          }
          // const newPath = path.slice(0, path.length - 2)
          // router.push(`${newPath}`)
          router.push(`${path}`).catch(() => {})
        })
    },
    editDescription ({ state }, payload) {
      const path = state.pathSelected
      console.log(payload, 'payload di swall')
      Swal.fire({
        title: 'Isi Berita :',
        input: 'textarea',
        inputValue: payload,
        grow: 'fullscreen',
        inputPlaceholder: 'Ketik Disini',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        confirmButtonColor: '#1a2c43f8',
        cancelButtonColor: '#a6a9ad',
        showLoaderOnConfirm: true,
        preConfirm: (description) => {
          // const fullpatch = { ...path }
          console.log(path, '>>>>> this path on preconfirm')
          // console.log(fullpatch, 'ini fullpatch di preconfirm')
          console.log(description, '>>>>ini description dari swall')
          axios({
            url: `${path}/editDescription`,
            method: 'patch',
            headers: { access_token: localStorage.getItem('access_token') },
            data: { description: description }
          })
            .then(({ data }) => {
              console.log(data, '>>>ini data setelah axios di action')
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Berhasil disimpan!',
              showConfirmButton: false,
              timer: 1500
            })
          }
          // const newPath = path.slice(0, path.length - 2)
          // router.push(`${newPath}`)
          router.push(`${path}`).catch(() => {})
        })
    },
    deleteContent ({ state }, payload) {
      const path = payload
      console.log(payload, 'ini payload di action awal')
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Yakin untuk menghapus?',
        text: 'File akan menghilang selamanya!',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Tidak, kepencet!',
        confirmButtonText: 'Ya, saya yakin!',
        reverseButtons: false
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `${path}`,
            method: 'delete',
            headers: { access_token: localStorage.getItem('access_token') }
          })
            .then(() => {
              swalWithBootstrapButtons.fire(
                'Terhapus!',
                'Telah menghilang selamanya.',
                'success'
              )
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Dibatalkan',
            'Untunglah, file masih aman :)',
            'error'
          )
        }
        const newPath = path.slice(0, path.length - 2)
        console.log(newPath, 'ini neew path tujuan di action')
        router.push(`${newPath}`).catch(() => {})
      })
    },
    add ({ state }, payload) {
      console.log(state, 'ini state di action')
      console.log(payload, '>>>> ini payload di action')
      const path = state.pathAddSelected
      console.log(path, '>>> ini path awal di action')
      const pathToAdd = path.slice(0, path.length - 4)
      console.log(pathToAdd, '>>>> ini path to add di action')
      const newDate = new Date()
      const typeForm = new FormData()
      typeForm.append('galeri', payload.image_url)
      typeForm.append('title', payload.title)
      typeForm.append('description', payload.description)
      typeForm.append('date', newDate)
      axios({
        url: `${pathToAdd}`,
        method: 'post',
        headers: { access_token: localStorage.getItem('access_token') },
        data: typeForm
      })
        .then(({ data }) => {
          console.log(data, '>>>ini data setelah axios di action')
          router.push(`${pathToAdd}`)
          Swal.fire({
            icon: 'success',
            title: 'Disimpan!',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    }
  },
  modules: {
  }
})
