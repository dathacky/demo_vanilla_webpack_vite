import { defineConfig } from 'vite';

export default defineConfig(({ mode = 'development' }) => {
  return { mode };
});
