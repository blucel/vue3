/*
 * @Descripttion: 命令
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 10:42:03
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 16:59:48
 */
import { spawn } from 'child_process'
import { projectRoot } from './paths'

/**
 * @description: spawn运行命令
 * @param {string} command - 命令
 * @param {string} cwd - 运行规则
 * @return {*}
 */
export const run = async (command: string, cwd: string = projectRoot) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ')
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: true,
    })
    app.on('close', resolve)
  })
}
