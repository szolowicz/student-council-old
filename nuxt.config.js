export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Samorząd uczniowski ZSM1',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Strona samorządu uczniowskiego Zespołu Szkół Mechanicznych nr 1 w Bydgoszczy.'
      },
      {
        name: 'keywords',
        content: 'ZSM1, Zespół, Szkół, Mechanicznych, nr 1, Samorząd, SU'
      },
      {
        name: 'author',
        content: 'Aleksander Szołowicz, Stanisław Fijołek'
      },
      {
        name: 'theme-color',
        content: '#484f99'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
      }
    ]
  },
  /*
   ** Progressive Web App manifest
   ** See https://pwa.nuxtjs.org/
   */
  pwa: {
    icon: {
      fileName: 'logo.png'
    },
    meta: {
      title: 'Samorząd uczniowski ZSM1',
      author: 'Aleksander Szołowicz, Stanisław Fijołek',
      description:
        'Strona samorządu uczniowskiego Zespołu Szkół Mechanicznych nr 1 w Bydgoszczy.',
      lang: 'pl'
    },
    manifest: {
      name: 'Samorząd uczniowski ZSM1',
      short_name: 'ZSM1 SU',
      description:
        'Strona samorządu uczniowskiego Zespołu Szkół Mechanicznych nr 1 w Bydgoszczy.',
      theme_color: '#484f99',
      lang: 'pl'
    }
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/sass/theme'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/infiniteloading', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/analytics-module
    '@nuxtjs/google-analytics',
    // Doc: https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/
    '@nuxtjs/color-mode'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'
  ],
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    base: '/strony/samorzad/'
  }
};
