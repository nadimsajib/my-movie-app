module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1a1c23', // Custom color based on design
          800: '#2a2d37'  // Custom color based on design
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
