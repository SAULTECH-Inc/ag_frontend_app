/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['roboto', 'ui-sans-serif', 'system-ui'],
      spectral: ['spectral', 'san-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      primary: '#39B755',
      alerts: {
        success: {
          color: '#20a020',
          bgColor: '#E0FFE0'
        },
        info: {
          color: '#FFFFFF',
          bgColor: '#4299e1'
        },
        error: {
          color: '#C5302E',
          bgColor: '#fff5f5',
          border: '#cbd5e0'
        }
      }
    },
    screens: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    maxWidth: {
      forms: '28rem'
    },
    extend: {
      colors: {
        neutral: '#000000',
        primary: {
          100: '#39B755',
          200: '#AAF7C3',
          300: '#50C878',
          400: '#58CC7E'
        },
        grey: {
          100: '#FFFFFF',
          200: '#E5E5E5',
          300: '#D4D7DB',
          400: '#69778C',
          500: '#302E2E',
          600: '#C4C4C4'
        }
      },
      spacing: {
        '25vh': '25vh',
        '30vh': '30vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '90vh': '90vh'
      }
    }
  },
  plugins: [],
}
