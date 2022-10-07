/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'max2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'maxxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'maxlg': {'max': '1399px'},
      // => @media (max-width: 1023px) { ... }

      'maxmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'maxsm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1400px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
