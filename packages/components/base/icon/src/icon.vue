<!--
 * @Descripttion: 
 * @version: 
 * @Author: 李佐宁
 * @Date: 2022-06-24 15:12:04
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-28 19:25:23
-->
<template>
  <i class="el-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'

export default defineComponent({
  name: 'ElIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {}
      }
      return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { color: props.color } : {}),
      }
    })

    return { style }
  },
})
</script>
