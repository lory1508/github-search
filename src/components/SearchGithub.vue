<template>
	<div class="flex items-center justify-center py-8">
		<div class="max-w-md space-y-4">
		<n-h1>
			<n-text type="primary">
				{{title}}
			</n-text>
		</n-h1>
			<n-input v-model:value="query" round type="text" name="searchGH" placeholder="Username" size="small" @keyup.enter="sendQuery" :loading="loading" />
			<n-button round ghost type="info" @click="sendQuery" :loading="loading">Cerca</n-button>
		</div>
	</div>
</template>

<script setup>
// components
import { NButton,  NInput, NH1, NText } from 'naive-ui';

import { ref } from "vue";
const query = ref("");	

const props = defineProps({
  title: { type: String, required: true },
	loading: { type: Boolean, required: true },
});

const emit = defineEmits(['queryUpdated']);

const sendQuery = () => {
	emit("queryUpdated", query.value);
	query.value = "";
};
</script>
