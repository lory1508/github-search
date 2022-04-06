<template>
  <n-switch :rail-style="railStyle">
    <template #checked>
      Dark
    </template>
    <template #unchecked>
      Light
    </template>
  </n-switch>
</template>
<script setup>
// UI
import { NSwitch } from 'naive-ui'

const updateTheme = () => {
	
}

</script>
