import axios from 'axios'
import { db } from './plugins/firebaseConfig'

export default {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Artenupcia - Invitaciones de Boda pesonalizadas, con mucho amor.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    script: [
      {
        innerHTML: `
        !(function(f, b, e, v, n, t, s) {
          if (f.fbq) return
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
          }
          if (!f._fbq) f._fbq = n
          n.push = n
          n.loaded = !0
          n.version = '2.0'
          n.queue = []
          t = b.createElement(e)
          t.async = !0
          t.src = v
          s = b.getElementsByTagName(e)[0]
          s.parentNode.insertBefore(t, s)
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
        fbq('init', '838245813591792')
        fbq('track', 'PageView')
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue2-touch-events.js',
    '~/plugins/firebaseConfig.js',
    { src: '~/plugins/click-outside.js', ssr: true },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Google analytics
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-161289524-1',
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  generate: {
    routes() {
      // rutas de los trabajos a partir de la info de Firebase
      return db
        .collection('fl_content')
        .get()
        .then((querySnapshot) => {
          const urlsTrabajos = []
          querySnapshot.forEach((doc) => {
            urlsTrabajos.push(`nuestros-trabajos/${doc.data().id}`)
          })
          return urlsTrabajos
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  publicRuntimeConfig: {
    firebase_cloud_function_sendEmail:
      'https://us-central1-artenupcia-server.cloudfunctions.net/sendEmail',
  },
}
