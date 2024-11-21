module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#192841',
        'hover-dark-blue': '#0e1725',
        'focus-dark-blue': '030508',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.8' }], // Adjust font size and line-height
      },
      boxShadow: {
        '3xl': '1px 2px 2px 1px',
      },
    },
  },
  plugins: [],
}
