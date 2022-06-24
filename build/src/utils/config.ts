/*
 * @Descripttion: 打包模块配置
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 17:11:13
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 09:43:03
 */
import path from 'path'
import { outDir } from './paths'

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es'),
    },
    bundle: { path: 'element-plus/es' },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib'),
    },
    bundle: { path: 'element-plus/lib' },
  },
}

export type BuildConfig = typeof buildConfig
