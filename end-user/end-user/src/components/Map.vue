<template>
<div class="more-top">
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12 title-margin">
          <h3 class="mb-3 text-center">Lokasi Kampus</h3>
      </div>
      <div class="map-style">
        <div id="embeddedmap-display" class="embed-style"><iframe class="frame-style" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=akademi+pariwisata+bunda&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="embeddedmap-code" href="https://www.embed-map.com" id="make-mapdata">https://www.embed-map.com</a></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Map'

}
</script>

<style>
#embeddedmap-display img {
  max-height: none;
  max-width: none!important;
  background: none!important;
}

.map-style {
  overflow: hidden;
  resize: none;
  max-width: 100%;
  width: 2048px;
  height: 400px;
}

.embed-style {
  height: 100%;
  width: 100%;
  max-width: 100%;
}

.frame-style {
  height: 100%;
  width: 100%;
  border: 0;
}

</style>
