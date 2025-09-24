/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts}',
    './projects/ui-components/src/**/*.{html,ts,stories.ts,mdx}',
    './projects/ui-components/.storybook/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488',
          strong: '#115e59',
        },
        accent: '#14b8a6',
        surface: '#ffffff',
        border: '#e2e8f0',
        muted: '#64748b',
        text: '#1f2937',
      },
      borderRadius: {
        '6': '6px',
        '8': '8px',
      },
      boxShadow: {
        'udm-1': '0 2px 4px -2px rgba(0,0,0,.12), 0 4px 6px -1px rgba(0,0,0,.1)',
        'udm-2': '0 1px 2px rgba(0,0,0,.08)',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  corePlugins: {},
  plugins: [],
};
