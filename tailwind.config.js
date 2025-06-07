/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
        fontFamily: {
            jost: ['jost', 'sans-serif']
        },
        colors: {
            primary: '#00078F',
            primary2: '#2730DD',
            black1: '#272727',
            black2: '#3B3B3B'
        }
    },
  },
  plugins: [],
}

