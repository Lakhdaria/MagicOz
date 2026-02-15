/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B6B4A',
          dark: '#134D35',
          light: '#E8F5EE',
          muted: '#2D8B64',
        },
        accent: {
          DEFAULT: '#D4A843',
          light: '#F5EDD4',
        },
        dark: '#1A1A1A',
        surface: {
          DEFAULT: '#FAFAF7',
          warm: '#F5F3EE',
        },
        border: {
          DEFAULT: '#E0DDD6',
          light: '#EEEDEA',
        },
        'text-main': '#2C2C2C',
        'text-secondary': '#5A5A5A',
        'text-muted': '#8A8A8A',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Outfit"', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
