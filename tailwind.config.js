module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ['"Playfair Display"', 'serif'],
      secondary: ['"Open Sans"', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
};
