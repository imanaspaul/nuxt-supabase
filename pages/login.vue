<template>
  <div>
    <div class="card reg text-center">
      <div class="card-body">
        <div class="logo py-3">
          <Logo />
        </div>
        <!-- <h4>Login</h4> -->
        <input v-model="email" type="email" placeholder="Enter email" class="form-control my-2">
        <input v-model="password" type="password" placeholder="Enter password" class="form-control mb-2">
        <button v-if="!login" class="btn btn-danger form-control">
          Register
        </button>
        <button v-else class="btn btn-success form-control" @click="signIn">
          Login
        </button>
      </div>
    </div>
    <p v-if="!login" class="text-center py-3 link" @click="changeLogin">
      Already have an account? <b>Login</b>
    </p>
    <p v-else class="text-center py-3 link" @click="changeLogin">
      Don't have an account? <b>Register</b>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  // middleware: 'auth',
  middleware ({ redirect, $supabase }) {
    if ($supabase.auth.user()) {
      return redirect('/')
    }
  },
  data () {
    return {
      login: false,
      email: '',
      password: ''
    }
  },
  // created () {
  //   if (this.$supabase.auth.user()) {
  //     this.$router.push('/')
  //   } else if (this.$supabase.auth.user() === null) {
  //     this.$router.push('/signin')
  //   }
  // },
  methods: {
    // change login state based on selection
    changeLogin () {
      this.login = !this.login
    },
    // sign up
    signIn () {
      this.$supabase.auth
        .signIn({
          email: this.email,
          password: this.password
        })
        .then(({ error, data }) => {
          if (error) {
            alert(error.message)
          } else {
            this.$store.dispatch('authe/setuser', data.user)
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style>
.link {
    cursor: pointer !important;
}
</style>
