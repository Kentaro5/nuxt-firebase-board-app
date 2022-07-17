import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // @todo Importing directly from a nuxt.config file is not allowed. Instead, use runtime config or a module. [importing /nuxt.config.ts from index.html]  のエラーが出ているので後で修正
    buildModules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/tailwind.css'],
    ssr: false,
    typescript: {
        strict: true
    },
    runtimeConfig: {
        public: {
            FIREBASE_API_KEY: process.env.VITE_FIREBASE_API_KEY, // variable that can also be accessed on the client side
            FIREBASE_AUTH_DOMAIN: process.env.VITE_FIREBASE_AUTH_DOMAIN, // variable that can also be accessed on the client side
            FIREBASE_PROJECT_ID: process.env.VITE_FIREBASE_PROJECT_ID, // variable that can also be accessed on the client side
            FIREBASE_STORAGE_BUCKET: process.env.VITE_FIREBASE_STORAGE_BUCKET, // variable that can also be accessed on the client side
            FIREBASE_MESSAGING_SENDER_ID: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // variable that can also be accessed on the client side
            FIREBASE_APP_ID: process.env.VITE_FIREBASE_APP_ID, // variable that can also be accessed on the client side
        }
    },
})
