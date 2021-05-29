<template>
  <div v-if="isLoading" class="text-center">
    <Logo />
    <br>
    <div class="spinner-border mt-4" role="status">
      <span class="visually-hidden" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  layout: 'auth',
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    if (this.$supabase.auth.user()) {
      this.$router.push('/')
    } else if (this.$supabase.auth.user() === null) {
      this.$router.push('/signin')
    }
  }
}
</script>

<style>

</style>
