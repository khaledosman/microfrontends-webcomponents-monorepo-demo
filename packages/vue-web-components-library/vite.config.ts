import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('counter-element')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'counter-element',
      // the proper extensions will be added
      fileName: 'counter-element'
    }
  },
  define: {
    'process.env': process.env
  }
})
