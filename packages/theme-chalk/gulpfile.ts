/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-23 11:08:08
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 11:22:28
 */
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import path from 'path'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import { dest, series, src } from 'gulp'

function compile() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .on('data', (data) => {
      let content = data.contents.toString()
      content = content.replaceAll('./fonts', 'element-plus/theme-chalk/fonts')
      data.contents = new Buffer(content)
    })
    .pipe(cleanCss())
    .pipe(dest('./dist/css'))
}

function copyfont() {
  return src(path.resolve(__dirname, './src/fonts/**'))
    .pipe(cleanCss())
    .pipe(dest('./dist/fonts'))
}

function copyfullStyle() {
  return src(path.resolve(__dirname, './dist/**')).pipe(
    dest('../../dist/theme-chalk')
  )
}

export default series(compile, copyfont, copyfullStyle)
