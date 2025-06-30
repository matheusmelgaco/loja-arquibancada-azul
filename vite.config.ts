import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => ({
  root: '.',
  base: mode === 'development' ? '/' : '/loja-arquibancada-azul/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/lovable-uploads',
          dest: '' // copia direto para dist/lovable-uploads/
        },
        {
          src: 'public/favicon.ico',
          dest: '' // garante que o favicon também vai
        }
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
