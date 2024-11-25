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
      'sql.js': resolve(__dirname, './node_modules/sql.js/dist/sql-wasm.js'),
    },
  },
  optimizeDeps: {
    exclude: ['sql.js'],
  },
  worker: {
    format: 'es',
  },
});
