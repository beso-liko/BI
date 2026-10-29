/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bi-black':     '#0B0B0B',
        'bi-dark':      '#141414',
        'bi-darker':    '#0E0E0E',
        'bi-red':       '#D71920',
        'bi-red-dark':  '#A8131A',
        'bi-white':     '#F5F5F5',
        'bi-muted':     '#6B6B6B',
        'bi-muted-lt':  '#999999',
        'bi-border':    '#222222',
        'bi-border-lt': '#2E2E2E',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.8rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.005em' }],
        'display-sm': ['clamp(1.2rem, 2.5vw, 2rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        'xs': '480px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'fade-in':  'fadeIn 0.6s ease forwards',
        'line-grow':'lineGrow 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
    },
  },
  plugins: [],
}
