/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export const tailwind = {
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    scale3d: {
      0: '0,0,0',
    },
    translate3d: {
      0: '0,0,0',
    },
    'template-columns': {
      0: 'none',
    },
    'template-rows': {
      0: 'none',
    },

    extend: {
      perspective: {
        0: '0px',
        1: '1px',
      },
      'translate-z': {
        0: '0px',
        1: '1px',
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
      color: {
        inherit: 'inherit',
      },
      'border-t': {
        1: '1px',
      },
      'border-b': {
        1: '1px',
      },
      'border-l': {
        1: '1px',
      },
      'border-r': {
        1: '1px',
      },
      h: {
        toolbar: '56px',
        app: 'calc(100vh - 56px)',
      },

      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // require('tailwindcss-3d'),
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       'background-attachment-initial': () => ({
    //         'background-attachment': 'initial',
    //       }),
    //     },
    //     {
    //       scale3d: (value: string | number) => ({
    //         transform: `scale3d(${value})`,
    //       }),
    //     },
    //     {
    //       translate3d: (value: string | number) => ({
    //         transform: `translate3d(${value})`,
    //       }),
    //     },
    //     {
    //       'template-columns': (value: string | number) => ({
    //         'template-columns': `grid-template-columns(${value})`,
    //       }),
    //     },
    //     {
    //       'template-rows': (value: string | number) => ({
    //         'template-rows': `grid-template-rows(${value})`,
    //       }),
    //     },
    //     { values: theme('app') }
    //   )
    // }),
  ],
}