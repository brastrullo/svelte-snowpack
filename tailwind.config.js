module.exports = {
  purge: ['./src/**/**/**/*.{html,js,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ['"Playfair Display"', 'serif'],
      secondary: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
};
