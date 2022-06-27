/*
 * @Descripttion: 所有打包路径
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 10:39:17
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-27 11:11:56
 */
import path from 'path'

export const projectRoot = path.resolve(__dirname, '../../../')
export const outDir = path.resolve(__dirname, '../../../dist')
// ya-plus 入口 index.ts
export const wpRoot = path.resolve(__dirname, '../../../packages/ya-plus')
// 组件目录
export const compRoot = path.resolve(projectRoot, 'packages/components')

export const epPackage = path.resolve(wpRoot, 'package.json')
