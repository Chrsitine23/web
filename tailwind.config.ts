/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      colors: {
        'primary': '#4A2558',
        'primary-light-10': "#5c3b69",
        'primary-light-20': "#6e5179",
        'primary-light-30': "#80668a",
        'primary-light-40': "#927c9b",
        'primary-light-50': "#a592ac",
        'primary-light-60': "#b7a8bc",
        'primary-light-70': "#c9becd",
        'primary-light-80': "#dbd3de",
        'primary-light-90': "#ede9ee",
        'primary-dark-10': "#43214f",
        'primary-dark-20': "#3b1e46",
        'primary-dark-30': "#341a3e",
        'primary-dark-40': "#2c1635",
        'primary-dark-50': "#25132c",
        'primary-dark-60': "#1e0f23",
        'primary-dark-70': "#160b1a",
        'primary-dark-80': "#0f0712",
        'primary-dark-90': "#070409",

        'secondary': '#D4A923',
        'secondary-light-10': "#d8b239",
        'secondary-light-20': "#ddba4f",
        'secondary-light-30': "#e1c365",
        'secondary-light-40': "#e5cb7b",
        'secondary-light-50': "#ead491",
        'secondary-light-60': "#eedda7",
        'secondary-light-70': "#f2e5bd",
        'secondary-light-80': "#f6eed3",
        'secondary-light-90': "#fbf6e9",
        'secondary-dark-10': "#bf9820",
        'secondary-dark-20': "#aa871c",
        'secondary-dark-30': "#947619",
        'secondary-dark-40': "#7f6515",
        'secondary-dark-50': "#6a5512",
        'secondary-dark-60': "#55440e",
        'secondary-dark-70': "#40330a",
        'secondary-dark-80': "#2a2207",
        'secondary-dark-90': "#151103",

        'tertiary': "#06203F",
        'tertiary-light-10': "#1f3652",
        'tertiary-light-20': "#384d65",
        'tertiary-light-30': "#516379",
        'tertiary-light-40': "#6a798c",
        'tertiary-light-50': "#83909f",
        'tertiary-light-60': "#9ba6b2",
        'tertiary-light-70': "#b4bcc5",
        'tertiary-light-80': "#cdd2d9",
        'tertiary-light-90': "#e6e9ec",
        'tertiary-dark-10': "#051d39",
        'tertiary-dark-20': "#051a32",
        'tertiary-dark-30': "#04162c",
        'tertiary-dark-40': "#041326",
        'tertiary-dark-50': "#031020",
        'tertiary-dark-60': "#020d19",
        'tertiary-dark-70': "#020a13",
        'tertiary-dark-80': "#01060d",
        'tertiary-dark-90': "#010306",
      }
    },
  },
  plugins: [],
}

