export const state = () => ({
  user: null
})

export const mutations = {
  set_user (store, data) {
    store.user = data
  },
  reset_user (store) {
    store.user = null
  }
}
export const actions = {
  setuser ({ commit }, data) {
    commit('set_user', data)
  },
  getuser ({ commit }) {
    const user = this.$supabase.auth.user()
    commit('set_user', user)
  }
}
