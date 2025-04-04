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
        primary: {
          DEFAULT: '#003C96', // Main blue color
          light: '#0052CC',   // Lighter blue for interactive elements
          dark: '#002B6B',    // Darker blue for hover states
        },
        secondary: {
          DEFAULT: '#52C41A', // Success green
          light: '#73D13D',   // Lighter green
          dark: '#389E0D',    // Darker green
        },
        warning: {
          DEFAULT: '#FF8B26', // Warning orange
          light: '#FFA94D',   // Lighter orange
          dark: '#D46B00',    // Darker orange
        },
        danger: {
          DEFAULT: '#FF4D4F', // Error red
          light: '#FF7875',   // Lighter red
          dark: '#CF1322',    // Darker red
        },
        neutral: {
          title: '#1F2937',    // Title text
          body: '#4B5563',     // Body text
          label: '#6B7280',    // Label text
          placeholder: '#9CA3AF', // Placeholder text
          line: '#E5E7EB',     // Lines/borders
          input: '#F3F4F6',    // Input background
          white: '#FFFFFF',    // White
          black: '#000000',    // Black
        },
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