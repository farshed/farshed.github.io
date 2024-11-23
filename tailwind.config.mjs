/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#3562f3'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'currentColor',
            fontSize: '1rem',
            a: {
              fontWeight: 'normal'
            },
            blockquote: {
              quotes: 'none'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
