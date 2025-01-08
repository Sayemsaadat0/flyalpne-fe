import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'f-primary-1-50': '#DEEBED',
        'f-primary-1-100': '#B1D0D6',
        'f-primary-1-200': '#90BCC4',
        'f-primary-1-300': '#6FA8B2',
        'f-primary-1-400': '#4D94A1',
        'f-primary-1-500': '#2C808F',
        'f-primary-1-600': '#1C6774',
        'f-primary-1-700': '#175560',
        'f-primary-1-800': '#0D3037',
        'f-primary-1-900': '#081E22',
        'f-primary-1': '#217989',
        'f-primary-2-50': '#ffefeb',
        'f-primary-2-100': '#ffcfc4',
        'f-primary-2-200': '#ffaf9d',
        'f-primary-2-300': '#FF866B',
        'f-primary-2-400': '#ff6f4e',
        'f-primary-2-500': '#ff4f27',
        'f-primary-2-600': '#ff4f27',
        'f-primary-2-700': '#d82700',
        'f-primary-2-800': '#b12000',
        'f-primary-2-900': '#621200',
        'f-primary-3-50': '#e9faf0',
        'f-primary-3-100': '#bef3d6',
        'f-primary-3-200': '#97ecc0',
        'f-primary-3-300': '#6ce4a8',
        'f-primary-3-400': '#4dde96',
        'f-primary-3-500': '#23d67e',
        'f-primary-3-600': '#1fbf70',
        'f-primary-3-700': '#189155',
        'f-primary-3-800': '#126b41',
        'f-primary-3-900': '#0c482c',
        'f-primary-3-hover': '#22c55e',
        'f-black-50': '#f3f3f4',
        'f-black-100': '#d9d9db',
        'f-black-200': '#b8b8bc',
        'f-black-300': '#8c8c92',
        'f-black-400': '#5f5f66',
        'f-black-500': '#34343a',
        'f-black-600': '#2d2d33',
        'f-black-700': '#232329',
        'f-black-800': '#18181d',
        'f-black-900': '#0f0f12',
        'f-white-50': '#ffffff',
        'f-white-100': '#fafafa',
        'f-white-200': '#f5f5f5',
        'f-white-300': '#eaeaea',
        'f-white-400': '#e1e1e1',
        'f-white-500': '#d6d6d6',
        'f-white-600': '#c2c2c2',
        'f-white-700': '#a5a5a5',
        'f-white-800': '#878787',
        'f-white-900': '#6b6b6b',

        // --- for seller
        's-primary-1': '#9B3F47',
      },
      fontSize: {
        'w-small-regular-16': [
          '1rem',
          {
            fontWeight: '400',
          },
        ],
        'w-paragraph-regular-20': [
          '1.25rem',
          {
            fontWeight: '400',
          },
        ],
        'w-title-1-Medium-22': [
          '1.5rem',
          {
            fontWeight: '500',
          },
        ],
        'w-title-2-Medium-28': [
          '1.75rem',
          {
            fontWeight: '500',
          },
        ],
        'w-title-3-Medium-36': [
          '2.25rem',
          {
            fontWeight: '500',
          },
        ],
        'w-title-4-Medium-48': [
          '3rem',
          {
            fontWeight: '600',
          },
        ],
        'w-header-1-bold-22': [
          '1.375rem',
          {
            fontWeight: '700',
          },
        ],
        'w-header-2-bold-28': [
          '1.75rem',
          {
            fontWeight: '700',
          },
        ],
        'w-header-3-bold-42': [
          '2.625rem',
          {
            fontWeight: '700',
          },
        ],
        'w-header-4-bold-56': [
          '3.5rem',
          {
            fontWeight: '700',
          },
        ],
        'w-header-4-1/2-bold-70': [
          '4.375rem',
          {
            fontWeight: '700',
          },
        ],
        'w-header-5-bold-88': [
          '5.5rem',
          {
            fontWeight: '700',
          },
        ],
        'w-header-6-bold-106': [
          '6rem',
          {
            fontWeight: '800',
          },
        ],
        'w-button-1-20': [
          '1.25rem',
          {
            fontWeight: '500',
          },
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
