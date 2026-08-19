/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Agentics-inspired palette. Old "metamask-*" token names are kept as
        // aliases (repointed to the new hex values) so existing usages across
        // the site repaint automatically without touching every file.
        cream: '#FEFBF6',
        ink: '#1F1F1F',
        coral: '#E25A3C',
        card: '#F6F3EF',
        'card-border': '#EDE8E1',

        'metamask-orange': '#E25A3C',
        'metamask-black': '#1F1F1F',
        'metamask-purple': '#1F1F1F',
        'metamask-gray-50': '#F6F3EF',
        'metamask-gray-100': '#EDE8E1',
        'solana-purple': '#9945FF',
        'solana-green': '#14F195',

        // Repoint Tailwind's own base tokens so the ~100 existing bg-white /
        // text-slate-900 utilities across the codebase pick up the new look
        // for free.
        white: '#FEFBF6',
        slate: {
          900: '#1F1F1F',
        },
      },
      backgroundImage: {
        'gradient-solana': 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
        'gradient-solana-reverse': 'linear-gradient(135deg, #14F195 0%, #9945FF 100%)',
      },
      fontFamily: {
        serif: ['var(--font-heading)', '"Barlow Condensed"', 'sans-serif'],
        sans: ['var(--font-mono)', '"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        '3xl': '32px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
