import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        verde: '#13DFDC',
        azul:' #08A1E4',
        preto: '#0A065C', 
        cinza:'#ECECEC'
    },
    fontFamily: {
      'lobster': ['Lobster', 'cursive'],
    },
    },
  },
  plugins: [],
}
export default config
