// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: 'https://sourcework9.github.io/sourcework.co/'
    },

    css: [
        '@/assets/css/tailwind.css',
    ],

    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        },
      }

})
