/** @type {import('tailwindcss').Config} */

// VA\\YA design system — warm ivory paper, near-black ink, one clay accent.
// The bright Tailwind hues used across older pages (emerald, violet, blue, …)
// are remapped to muted earth tones so every page shares the same calm palette.

const olive = {
  50: '#F3F4EE', 100: '#E6E9DC', 200: '#CED4BC', 300: '#B2BC97', 400: '#95A276',
  500: '#788C5D', 600: '#61734A', 700: '#4C5A3A', 800: '#3A452D', 900: '#2B3322',
}
const sky = {
  50: '#F1F5F9', 100: '#E1EAF3', 200: '#C5D6E8', 300: '#A3BFDC', 400: '#85ACD3',
  500: '#6A9BCC', 600: '#5180B0', 700: '#40668D', 800: '#324F6C', 900: '#263C52',
}
const fig = {
  50: '#F7F1F3', 100: '#EFE1E6', 200: '#DFC3CE', 300: '#CFA2B3', 400: '#C98399',
  500: '#C46686', 600: '#A6516F', 700: '#853F58', 800: '#653144', 900: '#4A2432',
}
const clay = {
  50: '#FBF2EE', 100: '#F6E2D8', 200: '#EEC5B2', 300: '#E6A68A', 400: '#DF8C6C',
  500: '#D97757', 600: '#C2603F', 700: '#9E4C31', 800: '#7A3B27', 900: '#5A2C1E',
}
const kraft = {
  50: '#FAF5EF', 100: '#F3E8DA', 200: '#E8D3B9', 300: '#DDBC98', 400: '#D4A27F',
  500: '#C08A63', 600: '#A0714F', 700: '#7E583E', 800: '#5E4230', 900: '#443024',
}
const stone = {
  50: '#FAF9F5', 100: '#F0EEE6', 200: '#E8E6DC', 300: '#D1CFC5', 400: '#B0AEA5',
  500: '#87867F', 600: '#5E5D59', 700: '#3D3D3A', 800: '#262624', 900: '#141413',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core tokens
        ivory: '#FAF9F5',
        cream: '#FAF9F5',
        ink: '#141413',
        coral: '#D97757',
        card: '#F0EEE6',
        'card-border': '#E8E6DC',
        oat: '#E3DACC',

        clay, olive, sky, fig, kraft, stone,

        // Remapped Tailwind hues (keeps older pages on-palette)
        emerald: olive,
        green: olive,
        teal: olive,
        blue: sky,
        cyan: sky,
        indigo: sky,
        violet: fig,
        purple: fig,
        pink: fig,
        orange: clay,
        red: clay,
        amber: kraft,
        yellow: kraft,
        gray: stone,
        slate: stone,

        sand: {
          100: '#FAF9F5',
          200: '#F0EEE6',
          300: '#E8E6DC',
          400: '#D1CFC5',
          800: '#262624',
          900: '#141413',
        },

        // Legacy aliases
        'metamask-orange': '#D97757',
        'metamask-black': '#141413',
        'metamask-purple': '#141413',
        'metamask-gray-50': '#F0EEE6',
        'metamask-gray-100': '#E8E6DC',
        'solana-purple': '#C46686',
        'solana-green': '#788C5D',

        white: '#FFFFFF',
      },
      backgroundImage: {
        'gradient-solana': 'linear-gradient(135deg, #D97757 0%, #D4A27F 100%)',
        'gradient-solana-reverse': 'linear-gradient(135deg, #D4A27F 0%, #D97757 100%)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'ui-serif', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', '"Geist Mono"', 'ui-monospace', 'monospace'],
        pixel: ['var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '20px',
        '2xl': '16px',
        xl: '12px',
      },
      maxWidth: {
        site: '1320px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
