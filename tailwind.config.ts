import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        gaming: {
          primary: '#6D28D9',
          secondary: '#10B981',
          dark: '#171717',
          accent: '#F472B6'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
} satisfies Config