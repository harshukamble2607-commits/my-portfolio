/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        card: '#FFFFFF',
        ink: '#202124',
        muted: '#626873',
        accent: {
          DEFAULT: '#315E81',
          soft: '#EAF0F5',
          ring: 'rgba(49, 94, 129, 0.30)',
        },
        line: '#E7E8EB',
        subtle: '#F2F4F6',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      maxWidth: {
        prose: '68ch',
      },
      borderRadius: {
        card: '14px',
        panel: '16px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(32, 33, 36, 0.04), 0 1px 3px rgba(32, 33, 36, 0.05)',
        raised: '0 10px 30px -12px rgba(32, 33, 36, 0.16), 0 4px 10px -6px rgba(32, 33, 36, 0.10)',
        hover: '0 18px 44px -18px rgba(32, 33, 36, 0.26), 0 8px 18px -12px rgba(32, 33, 36, 0.14)',
        nav: '0 1px 0 rgba(231, 232, 235, 1), 0 8px 24px -18px rgba(32, 33, 36, 0.20)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'check-draw': {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.7)' },
          '60%': { opacity: '1', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'drift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'word-up': {
          '0%': { transform: 'translateY(115%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'draw-line': 'draw-line 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'check-draw': 'check-draw 0.5s ease forwards',
        'pop-in': 'pop-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
        'drift': 'drift 6s ease-in-out infinite alternate',
        'word-up': 'word-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
