/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 10:26:41
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 11:09:58
 */
import { series, parallel } from 'gulp'
import { run, withTaskName, wpRoot, outDir } from './src/utils'
// 任务执行器 gulp 任务名 就会执行对应的任务
export * from './src/full-component'
export * from './src/component'
import { genTypes } from './src/gen-types'

// gulp 不叫打包，做代码转化 vite

const copySourceCode = () => async () => {
  await run(`cp ${wpRoot}/package.json ${outDir}/package.json`)
}

export default series(
  // 删除dist目录
  withTaskName('clean', async () => run('pnpm run clean')),
  parallel(
    // 并行执行packages目录下的build脚本
    withTaskName('buildPackages', async () =>
      run('pnpm run -C packages --parallel build')
    ),
    // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    withTaskName('buildFullComponent', async () => {
      run('pnpm run build buildFullComponent')
    }),
    withTaskName('buildComponent', () => run('pnpm run build buildComponent'))
  ),
  parallel(genTypes, copySourceCode())
)
