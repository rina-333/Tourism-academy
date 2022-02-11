<template>
  <div class="more-top">
    <section class="pt-5 pb-5">
      <div class="container">
        <h2 class="mb-5">Alumni Testimoni</h2>
        <carousel v-bind:autoplay="true" v-bind:loop="true" :per-page="1" :mouse-drag="false" :speed="500">
          <slide>
            <article class="row card border-0 flex-md-row bg-testimony justify-content-between align-items-center card-top hover-zoomin">
              <div class="card-body order-2 order-md-1 col-md-3">
                <div class="example example-cover">
                  <img class="img-fluid img-testimony" src="@/assets/arinis.jpg" srcset="@/assets/arinis.jpg" alt="Direktur" title="Direktur"/>
                </div>
              </div>
              <div class="col-md-8 order-md-2 order-1 w-md-25" href="#">
                <div class="card-text mb-4 mt-4 px-5">
                    <p class="text-testimony">Merupakan Kebanggaan Tersendiri bisa Kuliah di Akademi Pariwisata Bunda. Karena Semua Berawal dari Akademi Ini.</p>
                  </div>
                  <div class="mt-auto d-flex justify-content-center align-items-center pt-2">
                    <div class="d-block">
                      <div class="font-weight-bold text-person">Arinis</div>
                      <div class="text-grevy text-person">GM Magna Hotel Gorontalo - Sulawesi</div>
                    </div>
                  </div>
              </div>
            </article>
          </slide>
          <slide>
            <article class="row card border-0 flex-md-row bg-testimony justify-content-between align-items-center card-top hover-zoomin">
              <div class="card-body order-2 order-md-1 col-md-3">
                <div class="example example-cover">
                  <img class="img-fluid img-testimony" src="@/assets/ian.jpg" srcset="@/assets/ian.jpg" alt="Direktur" title="Direktur"/>
                </div>
              </div>
              <div class="col-md-8 order-md-2 order-1 w-md-25" href="#">
                <div class="card-text mb-4 mt-4 px-5">
                    <p class="text-testimony">Kuliah di Akademi Pariwisata Bunda berarti anda telah memilih jalan kesuksesan yang tepat.</p>
                  </div>
                  <div class="mt-auto d-flex justify-content-center align-items-center pt-2">
                    <div class="d-block">
                      <div class="font-weight-bold text-person">Ian Hanafiah</div>
                      <div class="text-grevy text-person">Owner EROtour / Ketua ASITA Sumbar</div>
                    </div>
                  </div>
              </div>
            </article>
          </slide>
          <slide>
            <article class="row card border-0 flex-md-row bg-testimony justify-content-between align-items-center card-top hover-zoomin">
              <div class="card-body order-2 order-md-1 col-md-3">
                <div class="example example-cover">
                  <img class="img-fluid img-testimony" src="@/assets/ivan.jpg" srcset="@/assets/ivan.jpg" alt="Direktur" title="Direktur"/>
                </div>
              </div>
              <div class="col-md-8 order-md-2 order-1 w-md-25" href="#">
                <div class="card-text mb-4 mt-4 px-5">
                    <p class="text-testimony">APB, salah satu academy perhotelan terbaik yang ada di Indonesia. Banyak alumninya yang sukses diluar negeri.</p>
                  </div>
                  <div class="mt-auto d-flex justify-content-center align-items-center pt-2">
                    <div class="d-block">
                      <div class="font-weight-bold text-person">Ivan Riandhi</div>
                      <div class="text-grevy text-person">CHEF de Cruise Swissotel Makkah Saudi Arabia</div>
                    </div>
                  </div>
              </div>
            </article>
          </slide>
        </carousel>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Testimoni'
}
</script>

<style>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-testimony {
  background-color: rgba(127, 181, 243, 0.315) !important;
}

.example .img-testimony {
  width: 15vw;
  height: 15vw;
}

.text-testimony {
  font-size: 10px;
}

.text-person {
  font-size: 8px;
}
</style>
