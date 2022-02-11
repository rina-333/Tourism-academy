<template>
  <tr>
    <td>
      <p class="d-inline-block text-truncate" style="max-width: 70px">
        {{ content.title }}
      </p>
    </td>
    <td>
    <div class="example example-cover">
      <img class="img-fluid img-small" :src="content.image_url" alt=""/>
    </div>
    </td>
    <td>
      <p class="d-inline-block text-truncate" style="max-width: 200px">
        {{ content.description }}
      </p>
    </td>
    <td> {{ content.date | formatDate }} </td>
    <td>
      <router-link target="_blank" class="btn btn-primary" :to="`${$route.path}/${content.id}`">Edit</router-link>
      <a href="" class="btn btn-danger mt-2 mx-2" @click.prevent="deleteItem(`${$route.path}/${content.id}`)">Delete</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ContentList',
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    deleteItem (payload) {
      console.log(payload, '>>>>payload di methods')
      this.$store.dispatch('deleteContent', payload)
    }
    // sendPath () {
    //   console.log(this.$route.path, '>>ini this route path')
    //   const path = this.$route.path
    //   const idContent = this.content.id
    //   const payload = `${path}/${idContent}`
    //   console.log(idContent, '>>>>ini id content')
    //   console.log(payload, '>>>ini payload')
    //   this.$store.commit('GETPATH', payload)
    // },
  }
  // created () {
  //   this.sendPath()
  // }
}
</script>

<style>
.example {
  margin: 1em 0;
  text-align: center;
}

.example .img-small {
  width: 10vw;
  height: 10vw;
}

.example-cover img {
  object-fit: cover;
}

</style>
