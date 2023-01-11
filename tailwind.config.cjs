/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      colors: {
        '01': {
          dark_cyan: 'hsl(158, 36%, 37%)',
          cream: 'hsl(30, 38%, 92%)',
          very_dark_blue: 'hsl(212, 21%, 14%)',
          dark_grayish_blue: 'hsl(228, 12%, 48%)',
          white: 'hsl(0, 0%, 100%)',
        },
        '02': {
          orange: 'hsl(25, 97%, 53%)',
          light_grey: 'hsl(217, 12%, 63%)',
          medium_grey: 'hsl(216, 12%, 54%)',
          dark_blue: 'hsl(213, 19%, 18%)',
          very_dark_blue: 'hsl(216, 12%, 8%)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
      },
      backgroundImage: {
        previewMobile:
          "url('./src/views/ProductPreviewCardComponent/images/image-product-mobile.jpg')",
        previewDesktop:
          "url('./src/views/ProductPreviewCardComponent/images/image-product-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
