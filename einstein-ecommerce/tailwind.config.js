/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0E1422',
          light: '#071D3D'
        },
        secondary: {
          dark: '#F6F6F6',
          light: '#FFFFFF'
        },
        tertiary: {
          dark: '#5C5F6A',
          light: '#878A92',
          lightest: '#E6E7E8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: []
}
