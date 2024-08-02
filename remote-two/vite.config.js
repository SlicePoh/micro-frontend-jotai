import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
    name: 'remotetwo_app',
    filename: 'remoteEntry.js',
    remotes: {
      remoteApp: "http://localhost:5001/assets/remoteEntry.js",
    },
    // Modules to expose
    exposes: {
        './Cardtwo': './src/components/Cardtwo',
        './Types': './src/assets/Poketypes',
        './PokeCard': './src/components/PokeCard',
        './Modal': './src/pages/Modal',
        './Text': './src/pages/Text',
    },
    shared: ['react','react-dom','tailwindcss','jotai','react-icons','gsap','@gsap/react','react-router-dom'],
}),
],
build: {
modulePreload: false,
target: "esnext",
minify: false,
cssCodeSplit: false,
}})
