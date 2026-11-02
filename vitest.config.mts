import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    css: true,
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    onConsoleLog(log, type) {
      if (type === 'stderr' && log.includes('Warning: An update to')) {
        return false;
      }
      if (type === 'stderr' && log.includes('was not wrapped in act')) {
        return false;
      }
    },
  },
  resolve: {
    alias: {
      '@': import.meta.dirname,
    },
  },
});
