import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Friend-proj/', // 👈 обов’язково вказуєш назву репозиторію
  build: {
    sourcemap: false, // вимикає джерельні карти, де з’являється eval()
  },
  esbuild: {
    legalComments: 'none', // прибирає коментарі типу eval з білду
  },
})
