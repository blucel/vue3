/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-24 10:22:18
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 16:52:22
 */
// import { ElIcon,ElButton } from "@ya-plus/components";
import * as components from '@ya-plus/components'
import type { App } from 'vue'
// const components = [ElIcon,ElButton];
const install = (app: App) => {
  // 每个组件在写的时候都提供了install方法
  // 有的是组件，有的可能是指令 xxx.install = () => { app.directive() }
  // components.forEach((component) => app.use(component));
  Object.entries(components).forEach(([name, component]) => {
    return app.component(name, component)
  })
}
// app.use(ElementPlus)
export default {
  install,
}

export * from '@ya-plus/components'
