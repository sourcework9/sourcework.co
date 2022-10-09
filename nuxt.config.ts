// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: 'https://github.com/sourcework9/sourcework.co.git'
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
