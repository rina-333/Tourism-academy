<template>
  <div>
    <h1>List {{ msg }}</h1>
    <div class="table-responsive">
      <table class="table table-hover mt-4 align-middle">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Saran</th>
            <th>Email</th>
            <th>Tanggal {{ msg }}</th>
          </tr>
        </thead>
        <tbody>
          <ContentSuggest v-for="each in data"
          :key="each.id"
          :content="each"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ContentSuggest from '@/components/ContentSuggest.vue'

export default {
  name: 'TableSuggest',
  components: {
    ContentSuggest
  },
  props: ['msg', 'data']
}
</script>

<style>
.btn-primary {
  background-color: #1a2c43f8 !important;
}
</style>
