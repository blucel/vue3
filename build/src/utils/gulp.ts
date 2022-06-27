/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 10:32:33
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 16:57:24
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

/**
 * @description: 打包路劲重写
 * @param {string} format - 项目名
 * @return {string} 返回项目名
 */
export const pathRewriter = (format) => {
  return (id: string) => {
    id = id.replaceAll('@ya-plus', `ya-plus/${format}`)
    return id
  }
}
