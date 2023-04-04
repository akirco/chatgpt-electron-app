import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@bridge': resolve('src/bridge')
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@bridge': resolve('src/bridge')
      }
    },
    plugins: [
      react(),
      Icons({ autoInstall: true, compiler: 'jsx', jsx: 'react' }),
      AutoImport({
        imports: ['react', 'react-router-dom'],
        dts: './src/auto-imports.d.ts',
        dirs: ['./src/components', './src/layout', './src'],
        eslintrc: {
          enabled: true
        },
        defaultExportByFilename: true,
        resolvers: [
          IconsResolver({
            enabledCollections: ['Codicons']
          })
        ]
      })
    ]
  }
})
