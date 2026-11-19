import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          // Background surfaces
          black:        '#0F172A',   // deep slate – headings & reversed text
          'off-black':  '#FFFFFF',   // primary page background (crisp white)
          'near-black': '#F8FAFC',   // alternate section background (off-white)
          card:         '#F1F5F9',   // card surface
          // Borders
          border:       '#E2E8F0',   // clean slate border
          'border-dim': '#CBD5E1',   // softer border
          // Typography
          muted:        '#64748B',   // muted labels / captions
          sub:          '#334155',   // body copy
          dim:          '#94A3B8',   // very muted text
          // Legacy white kept for reversed text on colored surfaces
          white:        '#FFFFFF',
          // Primary brand accent – Royal/Cobalt Blue
          blue:         '#2563EB',
          'blue-dark':  '#1D4ED8',
          // Secondary accent – Vibrant Orange
          orange:       '#F97316',
          'orange-dark':'#EA580C',
        },
      },
    },
  },
  plugins: [],
}

export default config
