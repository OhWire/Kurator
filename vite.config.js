import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Öffnet den Browser automatisch
    proxy: {
      '/api/register': {
        target: 'http://localhost:3000', // Ziel-Backend-Server für Registrierung
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/register/, '/register'), // Entfernt '/api/register' aus dem Pfad
      },
      '/api/confirm': {
        target: 'http://localhost:3002', // Ziel-Backend-Server für Bestätigung
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/confirm/, '/confirm'), // Entfernt '/api/confirm' aus dem Pfad
      },
      '/api/login': {
        target: 'http://localhost:3001', // Ziel-Backend-Server für Login
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/login/, '/login'), // Entfernt '/api/login' aus dem Pfad
      },
      // Fügen Sie hier weitere Proxy-Einstellungen hinzu, falls nötig
    },
  },
  build: {
    outDir: 'dist', // Ausgabeverzeichnis für den Build
  },
});
