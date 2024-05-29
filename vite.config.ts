/** @type {import('vite').UserConfig} */
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  resolve: {
    alias: {
      // Alias
      '@': resolve(__dirname, 'src'),
    },
  },
}
