import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/topfacil-alojamentos/', // Nome do repositório
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    }
  }
});
