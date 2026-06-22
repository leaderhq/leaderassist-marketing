import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Component tests opt in to jsdom via the inline annotation
    // @vitest-environment jsdom at the top of each file.
    // Utility tests (lib/dc) run in the default node environment.
    environment: 'node',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
