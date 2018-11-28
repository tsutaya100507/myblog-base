const environment = process.env.NODE_ENV || "development"
const envSet      = require(`./env/env.${environment}.js`)
console.log(envSet)
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'app-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela+Round' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [ {src: '~/plugins/mavoneditor.js'} ],
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
  ],
  env: envSet,
  axios: {
    baseURL: process.env.apiBaseUrl,
    // host: 'localhost',
    // // host: 'https://my-blog-portfolio.herokuapp.com',
    // port: 8000,
    // prefix: '/api'
  }
}

