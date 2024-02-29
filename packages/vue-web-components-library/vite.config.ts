import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'shared-components',
      // the proper extensions will be added
      fileName: 'shared-components'
    }
  },
  define: {
    'process.env': process.env
  }
})
