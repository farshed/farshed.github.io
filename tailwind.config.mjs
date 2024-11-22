/** @type {import('tailwindcss').Config} */
export default {
  // corePlugins: {
  //   preflight: false
  // },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
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
