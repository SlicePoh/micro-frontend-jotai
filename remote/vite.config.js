import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './Card': './src/components/Card',
          './Pokedex': './src/components/Pokedex',
          './store': './src/store',
      },
      // remotes:{
      //   hostApp: 'http://localhost:5000/assets/hostEntry.js'
      // },
      shared: ['react','react-dom','tailwindcss','jotai'],
  }),
],
build: {
  modulePreload: false,
  target: "esnext",
  minify: false,
  cssCodeSplit: false,
}
})
