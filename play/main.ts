/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-22 09:55:03
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-29 14:11:57
 */
import App from './app.vue'
import { createApp } from 'vue'
import { ElIcon } from '@ya-plus/components'
// import { ElIcon } from '../dist/index.esm.js'
import '@ya-plus/theme-chalk/src/index.scss'
// import '../dist/theme-chalk/css/index.css'
const app = createApp(App)
app.use(ElIcon)
app.mount('#app')
