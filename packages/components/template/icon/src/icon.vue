<!--
 * @Descripttion: 
 * @version: 
 * @Author: 李佐宁
 * @Date: 2022-06-24 15:12:04
 * @LastEditors: 李佐宁
 * @LastEditTime: 2022-06-28 11:30:25
-->
<template>
  <el-button>template</el-button>
</template>

<script lang="ts">
import { ElButton } from 'element-plus'
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'

export default defineComponent({
  name: 'ElIcons',
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
