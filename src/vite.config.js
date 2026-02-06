// vite.config.js   (or vite.config.ts if using TypeScript)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  // Optional: add alias for @ → src/ (shadcn loves this)
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})