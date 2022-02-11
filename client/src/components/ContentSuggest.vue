<template>
  <tr>
    <td> test 1 </td>
    <td>
      <p class="d-inline-block" style="max-width: 400px">
        {{ content.desc_suggest }}
      </p>
    </td>
    <td> {{ content.email_suggest }} </td>
    <td> {{ content.date_suggest | formatDate }} </td>
  </tr>
</template>

<script>
export default {
  name: 'ContentSuggest',
  props: [
    'content'
  ]
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

.example-contain .img-small {
  object-fit: contain;
}
</style>
