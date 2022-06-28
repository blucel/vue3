/*
 * @Descripttion:
 * @version:
 * @Author: 李佐宁
 * @Date: 2022-06-24 15:12:04
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-24 16:53:00
 */
import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
}

export type IconProps = ExtractPropTypes<typeof iconProps>
