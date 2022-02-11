<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto mt-4">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light text-white fs-5">Sign In</h5>
            <form @submit.prevent="login">
              <div class="form-floating mb-3">
                <input type="text" v-model="username" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <div class="d-grid justify-content-center mt-4">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" style="max-width: 100px" type="submit">Sign
                  in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        username: this.username,
        password: this.password
      }
      // console.log(payload, '????????');
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

.card-body {
  background: #1a2c43f8;
  border-radius: 10px;
}
.form-control {
  background-color: #dfe9f7f8!important;
}

</style>
