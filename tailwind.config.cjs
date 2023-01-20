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
        '03': {
          light_gray: 'hsl(212, 45%, 89%)',
          grayish_blue: 'hsl(220, 15%, 55%)',
          dark_blue: 'hsl(218, 44%, 22%)',
        },
        '04': {
          soft_blue: 'hsl(215, 51%, 70%)',
          cyan: 'hsl(178, 100%, 50%)',
          very_dark_blue_main: 'hsl(217, 54%, 11%)',
          very_dark_blue_card: 'hsl(216, 50%, 16%)',
          very_dark_blue_line: 'hsl(215, 32%, 27%)',
        },
        '05': {
          pale_blue: 'hsl(225, 100%, 94%)',
          bright_blue: 'hsl(245, 75%, 52%)',
          very_pale_blue: 'hsl(225, 100%, 98%)',
          desaturated_blue: 'hsl(224, 23%, 55%)',
          dark_blue: 'hsl(223, 47%, 23%)',
        },
        '06': {
          very_dark_blue: 'hsl(233, 47%, 7%)',
          dark_desaturated_blue: 'hsl(244, 38%, 16%)',
          soft_violet: 'hsl(277, 64%, 61%)',
          slightly_trans_white_main: 'hsla(0, 0%, 100%, 0.75)',
          slightly_trans_white: 'hsla(0, 0%, 100%, 0.6)',
        },
        '07': {
          bright_orange: 'hsl(31, 77%, 52%)',
          dark_cyan: 'hsl(184, 100%, 22%)',
          very_dark_cyan: 'hsl(179, 100%, 13%)',
          transparent_white: 'hsla(0, 0%, 100%, 0.75)',
          very_light_gray: 'hsl(0, 0%, 95%)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        red_hat_display: ['Red Hat Display', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lexend_deca: ['Lexend Deca', 'sans-serif'],
        big_shoulders_display: ['Big Shoulders Display', 'cursive'],
      },
      backgroundImage: {
        previewMobile:
          "url('./views/ProductPreviewCardComponent/images/image-product-mobile.jpg')",
        previewDesktop:
          "url('./views/ProductPreviewCardComponent/images/image-product-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
