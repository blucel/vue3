/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-24 10:52:18
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-27 11:32:51
 */
import {
  outDir,
  projectRoot,
  wpRoot,
  run,
  withTaskName,
  buildConfig,
} from './utils'
import glob from 'fast-glob'
import { Project, ModuleKind, ScriptTarget, SourceFile } from 'ts-morph'
import path from 'path'
import fs from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'

/**
 * @description: 获取type文件路口
 */
export const genEntryTypes = async () => {
  const files = await glob('*.ts', {
    cwd: wpRoot,
    absolute: true,
    onlyFiles: true,
  })
  const project = new Project({
    compilerOptions: {
      declaration: true,
      module: ModuleKind.ESNext,
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(outDir, 'entry/types'),
      target: ScriptTarget.ESNext,
      rootDir: wpRoot,
      strict: false,
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
  })
  const sourceFiles: SourceFile[] = []
  files.map((f) => {
    const sourceFile = project.addSourceFileAtPath(f)
    sourceFiles.push(sourceFile)
  })
  await project.emit({
    emitOnlyDtsFiles: true,
  })
  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()
      await fs.mkdir(path.dirname(filepath), { recursive: true })
      await fs.writeFile(
        filepath,
        outputFile.getText().replaceAll('@ya-plus', '.'),
        'utf8'
      )
    }
  })
  await Promise.all(tasks)
}

/**
 * @description: 复制type文件到输出地址
 */
export const copyEntryTypes = () => {
  const src = path.resolve(outDir, 'entry/types')
  const copyTypesDefinitions = (module) =>
    parallel(
      withTaskName(`copyTypes:${module}`, () =>
        copy(src, buildConfig[module].output.path, { recursive: true })
      )
    )
  return parallel(copyTypesDefinitions('esm'), copyTypesDefinitions('cjs'))
}

export const genTypes = series(genEntryTypes, copyEntryTypes())
