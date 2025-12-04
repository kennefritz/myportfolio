import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/votre-nom-de-repo/' // Remplacez par le nom de votre dépôt
})