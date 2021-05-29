<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card border-0">
          <div class="card-body">
            <h3>Leftside bar</h3>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-0">
          <div class="card-body">
            <textarea v-model="post" class="form-control" placeholder="What's on your mind?" />
            <button class="btn btn-success mt-4 form-control" @click="makePost">
              Write Post
            </button>
          </div>
        </div>
        <div v-for="p in posts" :key="p.id" class="card border-0 my-2">
          <div class="card-body">
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center border-0">
          <div class="card-body">
            <div class="text-center">
              <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80" class="profile rounded" width="100px" height="100px" alt="profile">
            </div>
            <h5 v-if="auth" class="py-3">
              {{ auth.user.email }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexHome',
  middleware ({ redirect, $supabase }) {
    if ($supabase.auth.user() === null) {
      return redirect('/login')
    }
  },
  async asyncData ({ $supabase }) {
    const { data: posts } = await $supabase
      .from('posts')
      .select('*')
    return { posts }
  },
  data () {
    return {
      post: ''
    }
  },
  computed: {
    ...mapState(['auth'])
  },
  created () {
    this.getPosts()
  },
  mounted () {
    this.getUpdates()
  },
  methods: {
    getUpdates () {
      this.$supabase
        .from('posts')
        .on('*', (payload) => {
          this.posts.unshift(payload.new)
        })
        .subscribe()
    },
    async getPosts () {
      const { data: posts, error } = await this.$supabase
        .from('posts')
        .select('*')
      if (!error) {
        this.posts = posts
      }
    },
    async makePost () {
      await this.$supabase
        .from('posts')
        .insert([
          { desc: this.post, user: this.auth.user }
        ])
      this.post = ''
    }
  }
}
</script>

<style>
.profile {
    width: 80px;
    height: 80px;
    border-radius: 50% !important;
    object-fit: cover;
}
</style>
