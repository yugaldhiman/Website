import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


// export default defineConfig({
//   plugins: [react()],
// })



// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     extensions: ['.js', '.jsx'], // Ensure Vite resolves .jsx files
//   },
// }); 


export default defineConfig({
  root: 'public', // This changes the project root
  plugins: [react()],
});