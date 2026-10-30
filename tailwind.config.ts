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
          black:       '#000000',
          'off-black': '#0A0A0A',
          'near-black':'#111111',
          card:        '#161616',
          border:      '#262626',
          'border-dim':'#1C1C1C',
          muted:       '#737373',
          sub:         '#A3A3A3',
          dim:         '#D4D4D4',
          white:       '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

export default config
