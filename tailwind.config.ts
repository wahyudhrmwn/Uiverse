import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ["class", '[data-theme="dark"]'],
} as Config

export default config