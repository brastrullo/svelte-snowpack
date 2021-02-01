module.exports = {
  purge: ['./src/**/**/**/*.{html,js,svelte}'],
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
