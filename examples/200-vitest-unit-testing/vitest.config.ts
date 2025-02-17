// vitest.config.ts
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Make sure aliases like '@' work in tests
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom', // Simulate a DOM-like environment for Vue testing
    // setupFiles: './vitest.setup.ts', // Optional setup file for global mocks if needed
  },
});
