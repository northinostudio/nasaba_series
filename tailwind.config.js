/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9961A',
          light:   '#E8B93A',
          dark:    '#9A7010',
        },
        nasaba: {
          // ── Light sections ──────────────────────────
          bg:       '#FAF7EF',   // warm parchment
          'bg-alt': '#F0E8D8',   // warm earth cream
          frame:    '#FFFFFF',   // white card
          line:     '#E5D4BC',   // warm light border
          ink:      '#1A0800',   // primary text (deep warm brown)
          'ink-2':  '#5C3820',   // secondary text
          muted:    '#9A7060',   // muted text
          terra:    '#C0592A',   // terracotta accent
          'terra-l':'#FAEAE2',   // terracotta tint
          // ── Dark sections (Cast, Footer) ─────────────
          dark:     '#180A00',   // warm mahogany-black
          darker:   '#0D0500',   // deep dark
          card:     '#1E0D02',   // dark warm card
          border:   '#3A1A05',   // dark warm border
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in':  'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        carousel:   'carouselLeft 55s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        carouselLeft: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  safelist: [
    { pattern: /nasaba/, variants: ['hover', 'focus', 'active', 'group-hover', 'md', 'lg'] },
    { pattern: /gold/,   variants: ['hover', 'focus', 'active', 'group-hover'] },
  ],
  plugins: [],
}
