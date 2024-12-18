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
        '3xl': '1px 2px 0px 1px',
      },
      backgroundImage: {
        'svg-pattern': "url('../assets/images/jack-the-web-developer.svg')",
      },
    },
  },
  plugins: [],
}
