import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRaw from 'vite-plugin-raw'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vitePluginRaw({
      match: /\.vue$/,
      exclude: [new RegExp(path.resolve(__dirname, './src'))]
    })
  ]
})
