import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` keeps asset URLs relative so the built site works both at the
// domain root (Vercel/Netlify) and under a repository sub-path (GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2019',
  },
})
