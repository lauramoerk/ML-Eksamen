/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
    '--color-black': '#1E1E1E',
    '--color-soft-white': '#F9F9F9',
    '--color-dark-grayy': '#4F4F4F',
    '--color-gray': '#747474',
    '--color-light-gray': '#999999',
    '--color-accent-1': '#D5ABFF',
    '--color-accent-2': '#4EB364',
    
  },
  font_family: {
    '--font-family-display': 'dimensions, sans-serif',
    '--font-family-aktiv-grotesk': 'aktiv-grotesk, sans-serif',
    '--font-family-aktiv-grotesk-thin': 'aktiv-grotesk-thin, sans-serif',
    '--font-family-aktiv-grotesk-condensed': 'aktiv-grotesk-condensed, sans-serif',
    '--font-family-aktiv-grotesk-ex': 'aktiv-grotesk-extended, sans-serif',
  },

  font_size: {
    '--font-size-display': '186.3px',
    '--font-size-mega': '61px',
    'font-size-xxxl': 'clamp(48.83px, 1.37vw + 43.48px, 61.04px)',
    '--font-size-xxl': 'clamp(39.06px, 1.1vw + 34.78px, 48.83px)',
    '--font-size-xl': 'clamp(31.25px, 0.88vw + 27.83px, 39.06px)',
    '--font-size-lg': 'clamp(25px, 0.7vw + 22.26px, 31.25px)',
    '--font-size-md': 'clamp(20px, 0.56vw + 17.81px, 25px)',
    '--font-size-base': 'clamp(16px, 0.45vw + 14.25px, 20px)',
    '--font-size-sm': 'clamp(12.8px, 0.36vw + 11.4px, 16px)',
  },

   font_weight: {
    '--font-weight-regular':'400',
    '--font-weight-bold': '700',
    '--font-weight-xbold': '800',
    '--font-weight-black': '900',
   },

spacing: {
    '--spacing-gap-65': '65px',
    '--spacing-gap-55': '55px',
    '--spacing-gap-45': '45px',
    '--spacing-gap-25': '25px',
    '--spacing-gap-15': '15px',
    '--spacing-gap-10': '10px',
    '--spacing-gap-5': '5px',
    '--spacing-gap-0': '0px',
    '--spacing-margin-120': '120px',
    '--spacing-margin-110': '110px',
    '--spacing-margin-100': '100px',
    '--spacing-margin-60': '60px',
    '--spacing-margin-55': '55px',
    '--spacing-margin-50': '50px',
    '--spacing-margin-45': '45px',
    '--spacing-margin-40': '40px',
    '--spacing-margin-35': '35px',
    '--spacing-margin-30': '30px',
    '--spacing-margin-25': '25px',
    '--spacing-margin-20': '20px',
    '--spacing-margin-15': '15px',
    '--spacing-margin-10': '10px',
    '--spacing-margin-8': '8px',
    '--spacing-margin-5': '5px',
    '--spacing-margin-0': '0px',
    '--spacing-padding-120': '120px',
    '--spacing-padding-110': '110px',
    '--spacing-padding-100': '100px',
    '--spacing-padding-60': '60px',
    '--spacing-padding-55': '55px',
    '--spacing-padding-50': '50px',
    '--spacing-padding-45': '45px',
    '--spacing-padding-40': '40px',
    '--spacing-padding-35': '35px',
    '--spacing-padding-30': '30px',
    '--spacing-padding-25': '25px',
    '--spacing-padding-20': '20px',
    '--spacing-padding-15': '15px',
    '--spacing-padding-10': '10px',
    '--spacing-padding-8': '8px',
    '--spacing-padding-0': '0px',
},

border: {
    '--border-1': 'solid 1px var(--color-soft-white)',
    '--border-2': 'solid 2px var(--color-soft-white)',
    '--border-3': 'solid 3px var(--color-soft-white)',
    '--border-5': 'solid 5px var(--color-soft-white)',
},

z_index: {
        '--z-index-level-4': '15',
       '--z-index-level-3': '10',
        '--z-index-level-2': '5',
        '--z-index-level-1': '0',
        '--z-index-level-negative': '-5',
},

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
