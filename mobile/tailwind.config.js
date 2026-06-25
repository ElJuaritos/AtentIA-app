/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        navy: '#111E31',
        coral: '#FFAEB2',
        mint: '#B2D7C8',
        olive: '#658E74',
        offwhite: '#FAFAFA',
        text: '#111E31',
      },
      fontFamily: {
        heading: ['Nunito_800ExtraBold'],
        body: ['Inter_400Regular'],
      },
    },
  },
  plugins: [],
};
