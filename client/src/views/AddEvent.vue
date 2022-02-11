<template>
  <div>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <AddList tile="Event"/>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import AddList from '@/components/AddList.vue'

export default {
  name: 'AddEvent',
  components: {
    AddList
  }
}
</script>

<style>

</style>
