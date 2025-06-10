/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
  electricBlue: '#007BFF',
  darkNavy: '#0A1F44',
  lightGray: '#E5E5E5',
  brightOrange: '#FF6F00',
  neonPink: '#FF1FC9',
}},
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        electricBlue: '#007BFF',
        darkNavy: '#0A1F44',
        lightGray: '#E5E5E5',
        brightOrange: '#FF6F00',
        neonPink: '#FF1FC9',
      },
    },
  },
  plugins: [],
}