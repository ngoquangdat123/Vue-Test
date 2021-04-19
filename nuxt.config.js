export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-fe-nals',
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
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/style.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/js/chart", ssr: false },
    { src: "~plugins/js/dashboard", ssr: false },
    { src: "~plugins/js/documentation", ssr: false },
    { src: "~plugins/js/file-upload", ssr: false },
    { src: "~plugins/js/hoverable-collapse", ssr: false },
    { src: "~plugins/js/off-canvas", ssr: false },
    { src: "~plugins/js/tabs", ssr: false },
    { src: "~plugins/js/template", ssr: false },
    { src: "~plugins/js/todolist", ssr: false },
    { src: "~plugins/js/tooltips", ssr: false },
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/v1/login", method: 'post',propertyName: 'data.token'},
          user: false,
          logout: false
        },
        // user: {
        //   property: 'data'
        // },
        // token: {
        //   property: 'data.token'
        // },
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: ['auth']
  }
}
