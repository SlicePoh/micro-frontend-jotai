import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'hostEntry.js',
      // Modules to expose

      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        remotetwoApp: "http://localhost:5002/assets/remoteEntry.js"
      },
      shared: ['react', 'react-dom', 'tailwindcss','jotai'],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})

