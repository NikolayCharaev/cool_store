import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        custom: '1230px',
      },
    },
    extend: {
      colors: {
        'blueviolet-light': '#8B57C6',
        'blueviolet-dark': '#6C3EB8',
        white: '#F6F6F7',
        grey: '#B8B8B8',
        'dark-light': '#212123',
        dark: '#191919',
        'turquoise-dark': '#576067',
        'turquoise-light': '#616E74',
      },
    },
  },
  plugins: [],
};
export default config;
