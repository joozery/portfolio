import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // กำหนด output folder
  },
  publicDir: 'public', // ให้แน่ใจว่า public directory จะถูกคัดลอกไปยัง build
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
