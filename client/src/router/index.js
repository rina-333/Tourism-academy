import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import AddNews from '../views/AddNews.vue'
import AddEvents from '../views/AddEvent.vue'
// import EditTitle from '../components/EditContentTitle.vue'
// import EditImage from '../components/EditContentImage.vue'
// import EditDesc from '../components/EditContentDesc.vue'
// import EditDate from '../components/EditContentDate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'Berita',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/news/add',
    name: 'AddBerita',
    component: AddNews
  },
  {
    path: '/news/:id',
    name: 'DetailBerita',
    component: () => import('../views/DetailNews.vue')
    // children: [
    //   {
    //     path: '/editTitle',
    //     name: 'EditTitle',
    //     component: EditTitle
    //   },
    //   {
    //     path: '/editImage',
    //     name: 'EditImage',
    //     component: EditImage
    //   },
    //   {
    //     path: '/editDesc',
    //     name: 'EditDesc',
    //     component: EditDesc
    //   },
    //   {
    //     path: '/editDate',
    //     name: 'EditDate',
    //     component: EditDate
    //   }
    // ]
  },
  {
    path: '/events',
    name: 'Event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/events/add',
    name: 'AddEvents',
    component: AddEvents
  },
  {
    path: '/events/:id',
    name: 'DetailEvent',
    component: () => import('../views/DetailEvent.vue')
    // children: [
    //   {
    //     path: '/editTitle',
    //     name: 'EditTitle',
    //     component: EditTitle
    //   },
    //   {
    //     path: '/editImage',
    //     name: 'EditImage',
    //     component: EditImage
    //   },
    //   {
    //     path: '/editDesc',
    //     name: 'EditDesc',
    //     component: EditDesc
    //   },
    //   {
    //     path: '/editDate',
    //     name: 'EditDate',
    //     component: EditDate
    //   }
    // ]
  },
  {
    path: '/suggest',
    name: 'Saran',
    component: () => import('../views/Suggest')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('access_token')) {
    next('/login')
  } else {
    if (to.name === 'Login' && localStorage.getItem('access_token')) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
