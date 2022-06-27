/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-22 10:47:07
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 16:54:30
 */
import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

/**
 * @description: 注册组件
 * @param {object} comp - 注册组件
 */
export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}
