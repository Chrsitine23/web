import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('swiper-')
        }
      }
    })
  ],
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, './src') }
    ]
  },
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 200000,
        entryFileNames: `assets/csps.[hash].js`,
        chunkFileNames: `assets/csps.[hash].js`,
        assetFileNames: `assets/csps.[hash].[ext]`,
        compact: true,
      },
    }
  }
})
