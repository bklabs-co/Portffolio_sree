/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Charcoal, ivory and warm orange shared with index.css.
        void: '#141513',
        surface: '#1C1D1A',
        raised: '#262722',
        card: '#20211E',
        line: 'rgba(255,255,255,0.08)',
        'line-hover': 'rgba(247,148,99,0.5)',
        ink: '#EEEFE7',
        slate: { DEFAULT: '#ADB0A5', dim: '#92968B' },
        indigo: { accent: '#F79463' },
        violet: { accent: '#F79463' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1440px' },
      borderRadius: { xl2: '22px' },
    },
  },
  plugins: [],
}
