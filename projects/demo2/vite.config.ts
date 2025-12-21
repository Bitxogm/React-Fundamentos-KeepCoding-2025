import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@assets': '/src/assets',
      '@core': '/src/core',
      '@features': '/src/features',
    },
  },
  server: {
    open: false, // Evita abrir el navegador automáticamente con 'npm run dev'
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})
