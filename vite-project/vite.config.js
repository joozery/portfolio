import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // กำหนด output folder
    rollupOptions: {
      output: {
        format: 'esm', // ใช้ ES Module
      },
    },
  },
  publicDir: 'public', // ให้แน่ใจว่า public directory จะถูกคัดลอกไปยัง build
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'sql.js': resolve(__dirname, './node_modules/sql.js/dist/sql-wasm.js'), // ชี้ไปยังไฟล์ WebAssembly
    },
  },
  worker: {
    format: 'es', // รองรับ WebAssembly ใน worker
  },
});
