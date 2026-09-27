/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette synced 1:1 with the reference static build (sree-ruban-portfolio.html)
        void: '#0A0A0F',
        surface: '#131319',
        raised: '#191922',
        card: '#15151C',
        line: 'rgba(255,255,255,0.08)',
        'line-hover': 'rgba(139,116,246,0.45)',
        ink: '#F2F2F5',
        slate: { DEFAULT: '#96969F', dim: '#68687A' },
        indigo: { accent: '#6366F1' },
        violet: { accent: '#A855F7' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1280px' },
      borderRadius: { xl2: '22px' },
    },
  },
  plugins: [],
}
