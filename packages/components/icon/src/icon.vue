<!--
 * @Descripttion: 
 * @version: 
 * @Author: 李佐宁
 * @Date: 2022-06-24 15:12:04
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-27 09:44:50
-->
<template>
  <el-button>123</el-button>
  <i class="el-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { ElButton } from 'element-plus'
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'

export default defineComponent({
  name: 'ElIcon',
  components: { ElButton },
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
