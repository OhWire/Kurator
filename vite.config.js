import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Öffnet den Browser automatisch
    proxy: {
      '/api': {
        target: 'http://localhost:3002', // Ziel-Backend-Server für alle API-Anfragen
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Entfernt '/api' aus dem Pfad
      },
    },
  },
  build: {
    outDir: 'dist', // Ausgabeverzeichnis für den Build
  },
});
