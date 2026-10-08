/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#0f766e', // Peacock Teal Primary
          600: '#0d5c56',
          700: '#0b4340',
          800: '#082f38',
          900: '#051d24',
          dark: '#061724', // Midnight Krishna Navy
          accent: '#f59e0b', // Feather Eye Amber Gold
          cyan: '#06b6d4', // Luminous Cyan Glow
          gold: '#f59e0b',
        },
        marketplace: {
          amazon: '#FF9900',
          flipkart: '#2874F0',
          meesho: '#E40078',
        }
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
