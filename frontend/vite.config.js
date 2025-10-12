import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/manga_style_image_ai_generator/',
  plugins: [react(), tailwindcss()],
//  server: {
//      host: true,
//      allowedHosts: [
//        'preofficially-ruddiest-destiny.ngrok-free.dev'  // 👈 把 ngrok 生成的域名写这里
//      ],
//      proxy: {
//        '/api': {
//          target: 'http://localhost:8080', // 后端地址
//          changeOrigin: true,
//          secure: false,
//        }
//      }
//    }
})
