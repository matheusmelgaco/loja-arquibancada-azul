
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => ({
  root: '.',
  base: '/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
      },
      format: {
        comments: false,
      },
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/lovable-uploads',
          dest: ''
        },
        {
          src: 'public/favicon.ico',
          dest: ''
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
