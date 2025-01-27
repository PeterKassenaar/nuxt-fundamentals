// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    css: [
        '@/assets/css/globals.css'
    ],

    modules: ['@nuxtjs/tailwindcss'],
    app: {
        // 1. Global SEO + Meta tags.
        head: {
            title: 'My Nuxt.js project', // static title + meta tags
            meta: [
                {charset: 'utf-8'},
                {name: 'description', content: 'My Nuxt.js project...blablabla'},
                {name: 'keywords', content: 'Nuxt.js, Tailwind, CSS, JavaScript'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
