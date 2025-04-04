/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677FF',
        secondary: '#6B7280',
        success: '#52C41A',
        warning: '#FAAD14',
        error: '#FF4D4F',
        'gray-light': '#F5F5F5',
        'gray-dark': '#8C8C8C',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} 