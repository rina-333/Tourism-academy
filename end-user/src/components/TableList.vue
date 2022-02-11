<template>
  <div>
    <h1>List {{ msg }}</h1>
    <div class="table-responsive">
      <table class="table table-hover mt-4 align-middle">
        <thead>
          <tr>
            <th>Judul {{ msg }}</th>
            <th>Image {{ msg }}</th>
            <th>Deskripsi {{ msg }}</th>
            <th>Tanggal {{ msg }}</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <ContentList v-for="each in data"
          :key="each.id"
          :content="each"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ContentList from '@/components/ContentList.vue'

export default {
  name: 'TableList',
  components: {
    ContentList
  },
  props: ['msg', 'data']
}
</script>

<style>
.btn-primary {
  background-color: #1a2c43f8 !important;
}
</style>
