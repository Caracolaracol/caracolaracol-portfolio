/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tommy: ['var(--font-tommy)'],
        chrono: ['var(--font-chrono)'],
        tommylight: ['var(--font-tommyLight)'],
        tommyregular: ['var(--font-tommyRegular)'],
        tommybold: ['var(--font-tommyBold)'],
      },
    },
    colors: {
      // BACKGROUND
      dark:"#1c1b22", // DARK
      snow:"#F4EFF1", // LIGHT
      // TEXT
      platinum:"#EBE6E8", // DARK
      raisinblack:"#292736", // LIGHT
      // ASIDE MENU
      night: "#110F17", // DARK
      nightlight:"#1f1d28", // LIGHT
      // MAIN PALLETE
      cerise: '#D94A6D',
      violet:'#312559',
      darkpurple:'#332230',
      // ACTION COLORS
      violetlight:'#483681',
      ocrelight:'#935e30',

      richblack:"#0C0A15",
      black:"#1f1d28",
      ocre: '#DE7F26',
      timberwolf:'#c0a8a2',
      
      

/*       // --- OLD PALLETTE ----

      
      violet:'#312559',
      darkpurple:'#332230',
      ocre: '#CD7527',
      cerise: '#CC496C',
      timberwolf:'#c0a8a2',
      lavenderblush:'#EFE1E5',
      // Paleta principal
      naranja: '#CD7527',

      
      blancon: '#BAB3B3',
      verde: '#22402C',
      
      //Exclusivos Dia 
      azuld: '#2173A6',
      negrod: "#272430",
      blancod: '#f1e9ec',
      
      // Exclusivos Noche
      negron: '#0A070F',
      blancon: '#AAAAAA',
      violetaactive: '#6e58b8',
      
      // Más Brillantes
      
      // Más Oscuros
      naranjalink: '#935e30',
      fucsiadark: '#A33B57',
      
      blancomenu: '#ddd4ed',
      
      naranja: '#ac5a12',
      negrodl: '#281D40',
      naranjadl: '#DD883D',
      violetadl: '#453382',
      verdedl: '#336845',
      azuldl: '#268DCD',
      fucsiadl: '#CE5E7C', */
    },
    screens: {

      tablet: '640px',
      // => @media (min-width: 640px) { ... },
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  plugins: [],
}