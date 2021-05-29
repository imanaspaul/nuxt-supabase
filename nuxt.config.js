export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-supabase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtclub/supabase',
    '@nuxtjs/eslint-module'
  ],
  // supabase config
  supabase: {
    url: 'https://xfbsxxknzfpbdswdetdi.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTE0MTQzOSwiZXhwIjoxOTM2NzE3NDM5fQ.LzczwufcrUtGC21RsrAcDap3_KUCshEb9ujJ0uQqmHs'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  build: {
  }
}
