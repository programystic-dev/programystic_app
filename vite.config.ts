import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
  ],
  build: {
    outDir: 'build',
  },
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(''),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.REACT_APP_GOOGLE_ANALYTICS': JSON.stringify(
      process.env.REACT_APP_GOOGLE_ANALYTICS || 'G-BVZ9ETXVMR'
    ),
  },
  server: {
    port: 3000,
    open: true,
  },
});
