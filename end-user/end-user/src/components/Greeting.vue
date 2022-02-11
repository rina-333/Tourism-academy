<template>
  <div class="more-top">
    <section class="pt-5 pb-5">
      <div class="container">
        <!-- Dont ask me where but look at how it's ordered so good -->
        <article class="row card border-0 flex-md-row justify-content-between align-items-center card-top hover-zoomin">
          <div class="col-md-5 order-md-2 order-1 w-md-25" href="#">
            <div class="example example-cover">
              <img class="img-fluid img-tall" src="@/assets/senat.jpg" srcset="@/assets/senat.jpg" alt="Direktur" title="Direktur"/>
            </div>
          </div>
            <div class="card-body order-2 order-md-1 col-md-7">
              <div class=" text-uppercase font-weight-bold mb-4 text-blue mt-4">Sambutan Direktur</div>
              <h2 class="card-title display-4 font-weight-bold">
                <p class="text-dark judul-greeting" title="Title">Selamat Datang di Akademi Pariwisata Bunda</p>
              </h2>
              <div class="card-text mb-4">
                <p class="median-text-greeting text-grey">Kampus ini didirikan atas prakarsa ibu-ibu yang tergabung pada yayasan bunda yang dimotori oleh Ibu Nelly Adam Malik, Ibu Ratna Maida Ning dan ibu-ibu perantau minang lainnya di Jakarta. Kampus ini diresmikan oleh Menparpostel Ahmad Tahir pada tahun 1983, juga aktif membina tokoh masyarakat minang.</p>
              </div>
              <div class="mt-auto d-flex justify-content-center align-items-center pt-2">
                <div class="d-block person-text-greeting">
                  <div class="font-weight-bold">Afriadi, M.Si</div>
                  <div class="text-grey">Direktur Akademi Pariwisata Bunda</div>
                </div>
              </div>
            </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Greeting'

}
</script>

<style>
.judul-greeting {
  font-size: 37px;
}
.median-text-greeting {
  font-size: 13px;
}
.person-text-greeting {
  font-size: 9px;
}
</style>
