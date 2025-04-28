import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3D-portfolio/', // 🔥 This must match your repo name exactly (case-sensitive)
  plugins: [react()],
});