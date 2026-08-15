/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      // Añade estas animaciones para el carrusel
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        primary: ({ opacityValue }) => {
        return opacityValue !== undefined 
        ? `rgb(var(--color-primary) / ${opacityValue})` 
        : `rgb(var(--color-primary))`
        },
        secondary: ({ opacityValue }) => {
        return opacityValue !== undefined 
        ? `rgb(var(--color-secondary) / ${opacityValue})` 
        : `rgb(var(--color-secondary))`
        },
        background: ({ opacityValue }) => {
        return opacityValue !== undefined 
        ? `rgb(var(--color-background) / ${opacityValue})` 
        : `rgb(var(--color-background))`
        },
        darker: ({ opacityValue }) => {
        return opacityValue !== undefined 
        ? `rgb(var(--color-darker) / ${opacityValue})` 
        : `rgb(var(--color-darker))`
        }
      }
    },
  },
  plugins: [],
}