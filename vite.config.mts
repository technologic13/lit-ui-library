import { resolve } from 'path';
import { defineConfig } from 'vite';

// once root been changed, the outDir changes too
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir,
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: false,
    target: 'esnext', // Target modern browsers
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      external: /^lit/, // Exclude lit from the bundle
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  optimizeDeps: {
    // exclude: ['lit'], // Exclude lit from dependency pre-bundling
  },
});
