/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 17:21:37
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 11:40:35
 */
import path from 'path'
import ts from 'gulp-typescript'
import { buildConfig } from './src/utils/config'
import { dest, parallel, series, src } from 'gulp'
import { outDir, projectRoot, withTaskName } from './src/utils'

export const buildPackages = (dirname: string, name: string) => {
  const task = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name)
    return series(
      withTaskName(`build:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true,
              strict: false,
              module: config.module,
            })()
          )
          .pipe(dest(output))
      }),
      withTaskName(`copy:${dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, config.output.name, name))
        )
      })
    )
  })
  return parallel(...task)
}
