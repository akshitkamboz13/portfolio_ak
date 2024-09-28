import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // This is needed if you're deploying to a sub-path on GitHub Pages or Netlify
  // Set the correct base path for your project if deploying to a subdirectory
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',

  // Configure build options
  build: {
    outDir: 'dist', // default build directory for Vite
    sourcemap: true, // Optional: Enables source maps (useful for debugging)
  },

  // Server options for development
  server: {
    port: 3000, // Change this if you prefer a different dev server port
    open: true, // Automatically open the browser on server start
  },

  // Optimizing dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

