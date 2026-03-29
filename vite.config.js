import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js?v=202403291057`,
        chunkFileNames: `assets/[name].js?v=202403291057`,
        assetFileNames: `assets/[name].[ext]?v=202403291057`
      }
    }
  }
})
