/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['satoshi','poppins', 'sans-serif', 'ui-sans-serif', 'system-ui'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary:'#a855f7',
        contrast: '#f97316'
      },
    },
  },
  plugins: [],
}
