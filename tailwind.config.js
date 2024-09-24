/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'customGrid': '20%, 1fr',
        'customGrid1': '40%, 1fr',
        'customGrid3': '1fr, 20%',
        'customGrid2': 'repeat(auto-fit, minmax(250px, 1fr))',
        'customGrid3': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#000000',
        'grey': '#dfe3e7',
        'white': '#FFFFFF',
        'transparent': 'rgba(16, 22, 47, 0.1)',
      },
      screens: {
        'tab': {'max': '900px'},
        'tab1': {'max': '1005px'},
        'tab2': {'max': '1030px'},
        'mob': {'max': '700px'},
        'mob2': {'max': '400px'},
        'mob3': {'max': '463px'},
        'desk': {'max': '830px'}
      }
    },
  },
  plugins: [],
}