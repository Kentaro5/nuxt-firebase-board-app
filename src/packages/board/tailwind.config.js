/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue', // <= ドキュメントからさらに追加
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'content-lists': '40px 1fr',
        'content-list-under': '100px 120px 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
