import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from 'vite-plugin-env';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // env({
    //   development: {
    //     REACT_APP_GOOGLE_API_KEY: 'AIzaSyBV_VqzgAKqOgXhXt4VTsDnRM4tyf8YUCo'
    //   },
    //   production: {
    //     REACT_APP_GOOGLE_API_KEY: 'AIzaSyBV_VqzgAKqOgXhXt4VTsDnRM4tyf8YUCo'
    //   }
    // })

  ],
})
