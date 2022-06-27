/*
 * @Descripttion: 打包模块配置
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 17:11:13
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 16:56:18
 */
import path from 'path'
import { outDir } from './paths'

// 打包配置项
export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es'),
    },
    bundle: { path: 'ya-plus/es' },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib'),
    },
    bundle: { path: 'ya-plus/lib' },
  },
}

export type BuildConfig = typeof buildConfig
