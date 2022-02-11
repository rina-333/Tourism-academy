<template>
<section>
    <div class="container-fluid">
      <article class="row">
        <div class="col-md-12">
          <div class="card shadow-lg box-simple">
            <h3 class="toCapitalFirst"> {{ detail.title }} </h3>
            <h6> {{ detail.date | formatDate }} </h6>
            <div class="row justify-content-center mb-3">
              <div class="col-md-10 mt-5">
                <div class="example example-cover">
                  <img class="img-fluid img-tallEvent" :src="detail.image_url" alt="image of detail item"/>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="row align-items-center justify-content-center">
                <div class="text-center col-md-8 col-lg-8">
                  <p class="lead paragraf"> {{ detail.description }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    detail () {
      return this.$store.state.selected
    }
  }
}
</script>

<style>
.toCapitalFirst {
  text-transform: capitalize;
}
.example {
  margin: 1em 0;
  text-align: center;
}

.example .img-tallEvent {
  width: 70vw;
  height: 70vw;
}

.example-cover img {
  object-fit: cover;
}

.small-text {
  font-size: 13px;
}

</style>
