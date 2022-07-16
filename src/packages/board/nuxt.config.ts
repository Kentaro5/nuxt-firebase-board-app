import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // @todo Importing directly from a nuxt.config file is not allowed. Instead, use runtime config or a module. [importing /nuxt.config.ts from index.html]  のエラーが出ているので後で修正
    buildModules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/tailwind.css'],
})
