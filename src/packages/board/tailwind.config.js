/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue', // <= ドキュメントからさらに追加
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
