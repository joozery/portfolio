import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es', // ใช้ ES Module
      },
    },
    target: 'esnext', // รองรับ WebAssembly
  },
  publicDir: 'public', // โฟลเดอร์ public
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // ชื่อ alias
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
