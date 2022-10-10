// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/',
        extendRoutes(routes) {
            for (const key in routes) {
                routes[key].caseSensitive = true
            }
        }
    },

    css: [
        '@/assets/css/tailwind.css',
    ],

    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        },
      },

    head: {
        title: "SourceWork - Hire remote full-time developers from India",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description' },
           { link: { rel: 'stylesheet', href: '/css/tailwind.css' }}
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
            { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png' },
            { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
        ],
    },
})
