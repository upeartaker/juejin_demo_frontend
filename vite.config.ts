import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      "/api":{
        target:"http://127.0.0.1:3001", //代理的目标
        changeOrigin:true, //是否改变源
        rewrite:(path)=>{
          return path.replace(/^\/api/,"") // 替换路径
        }
      }
    }
  }

})
