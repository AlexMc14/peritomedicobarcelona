/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1b3a5c',
          950: '#102a43',
        },
        accent: {
          50: '#fdf8f0',
          100: '#faecd6',
          200: '#f5d5a0',
          300: '#e8b44b',
          400: '#d4a03a',
          500: '#b8860b',
          600: '#96700a',
          700: '#745708',
          800: '#5c4506',
          900: '#483604',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
