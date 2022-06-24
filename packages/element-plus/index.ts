/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-24 10:22:18
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 15:14:41
 */
// import { WIcon,WButton } from "@w-plus/components";
import * as components from '@element-plus/components'
import type { App } from 'vue'

// const components = [WIcon,WButton];

const install = (app: App) => {
  // 每个组件在写的时候都提供了install方法

  // 有的是组件，有的可能是指令 xxx.install = () => { app.directive() }
  // components.forEach((component) => app.use(component));
  console.log(components, 'componentscomponentscomponents')

  Object.entries(components).forEach(([name, component]) => {
    return app.component(name, component)
  })
}

// app.use(ElementPlus)
export default {
  install,
}

// import { WIcon } from 'w-plus
export * from '@element-plus/components'
