/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 10:32:33
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 10:14:09
 */
import type { TaskFunction } from 'gulp'
/**
 * @description: 添加任务名
 * @param {string} name - 任务名称
 * @param {function} fn - 绑定名称的函数
 * @return {*}
 */
export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

// 重写打包后的@element-plus 路径
export const pathRewriter = (format) => {
  return (id: string) => {
    id = id.replaceAll('@element-plus', `element-plus/${format}`)
    return id
  }
}
