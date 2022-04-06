<template>
	<div class="align-middle py-4 px-4">
		<n-switch :rail-style="railStyle">
			<template #checked>
				Light
			</template>
			<template #unchecked>
				Dark
			</template>
		</n-switch>
	</div>
</template>
<script setup>
// UI
import { NSwitch } from 'naive-ui'

const emit = defineEmits(['updateTheme']);

const railStyle = ({focused,	checked}) => {
	if (checked && focused) {
		emit("updateTheme", 'light');
	} else if(!checked && focused) {
		emit("updateTheme", 'dark');
	}
}
const updateTheme = () => {

}

</script>
