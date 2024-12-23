/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slow-reverse': 'spin 30s linear infinite reverse',
        'spin-fast': 'spin 20s linear infinite',
        'spin-fast-reverse': 'spin 20s linear infinite reverse',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

