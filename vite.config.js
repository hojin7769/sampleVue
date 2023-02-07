import { fileURLToPath, URL } from 'url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [
      vue({
      }),
    ],
    server: {
      hmr: {
        clientPort: env.CLIENT_PORT,
      },
      proxy: {
        '/api': {
          target:
              env.APP_BACKEND == null ? 'http://localhost:8080' : env.APP_BACKEND,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};