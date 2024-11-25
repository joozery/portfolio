import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
    target: 'esnext',
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: [],  // ลบ 'sql.js' ออกจากการ exclude หากคุณไม่ใช้ใน frontend
  },
  worker: {
    format: 'es',
  },
});
