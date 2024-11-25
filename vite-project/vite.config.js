import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // กำหนด output folder สำหรับ build
    rollupOptions: {
      output: {
        format: 'es', // ใช้ ES Module
      },
    },
    target: 'esnext', // ระบุ target เพื่อให้รองรับ WebAssembly
  },
  publicDir: 'public', // ให้แน่ใจว่า public directory จะถูกคัดลอกไปยัง build
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // ตั้ง alias สำหรับ src
      'sql.js': resolve(__dirname, './node_modules/sql.js/dist/sql-wasm.js'), // ชี้ไปยังไฟล์ WebAssembly
    },
  },
  optimizeDeps: {
    exclude: ['sql.js'], // ยกเว้น sql.js จากการ optimize
  },
  worker: {
    format: 'es', // รองรับ WebAssembly ใน worker
  },
});
