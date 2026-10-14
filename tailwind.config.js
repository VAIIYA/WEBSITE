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
        // Westworld / Arc Raiders Retro-Futuristic Palette
        cream: '#F4EFE6',         // Warm parchment / Desert outpost dust
        ink: '#1A1815',           // Deep carbon / weathered chassis black
        coral: '#D9532F',         // Arc Raiders beacon rust / retro hazard orange
        card: '#EAE3D2',          // Military terminal buff / desert sand card
        'card-border': '#D8CEBA',  // Spec sheet grid border
        
        // Retro Sci-Fi Accents
        amber: {
          500: '#E59B27',         // CRT monitor amber
          600: '#C77D14',
        },
        olive: {
          500: '#5A6855',         // Arc Raiders scavenged military olive
          700: '#3D473A',
        },
        cyan: {
          500: '#38A3A5',         // Delos host diagnostic cyan
        },
        sand: {
          100: '#F9F6F0',
          200: '#F4EFE6',
          300: '#EAE3D2',
          400: '#D8CEBA',
          800: '#2A2621',
          900: '#1A1815',
        },

        'metamask-orange': '#D9532F',
        'metamask-black': '#1A1815',
        'metamask-purple': '#2A2621',
        'metamask-gray-50': '#EAE3D2',
        'metamask-gray-100': '#D8CEBA',
        'solana-purple': '#8E44AD',
        'solana-green': '#2ECC71',

        // Base overrides
        white: '#F9F6F0',
        slate: {
          900: '#1A1815',
          800: '#28241F',
          700: '#3D3831',
        },
      },
      backgroundImage: {
        'gradient-solana': 'linear-gradient(135deg, #D9532F 0%, #E59B27 100%)',
        'gradient-solana-reverse': 'linear-gradient(135deg, #E59B27 0%, #D9532F 100%)',
      },
      fontFamily: {
        serif: ['var(--font-geist-sans)', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-geist-sans)', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', '"Geist Mono"', 'ui-monospace', 'monospace'],
        pixel: ['var(--font-geist-mono)', '"Geist Mono"', 'monospace'],
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
