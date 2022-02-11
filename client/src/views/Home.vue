<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <h3 class="text-dark text-center animated slideInLeft">
              <Welcome msg="Welcome, Admin Akademi Pariwisata Bunda"/>
            </h3>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>
