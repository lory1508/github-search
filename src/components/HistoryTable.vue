<template>
	<div class="mx-40 my-20">
		<n-h1>
			<n-text type="primary">
				{{title}}
			</n-text>
		</n-h1>
		<n-space vertical>
			<!-- TODO: usare n-datatable invece di n-table -->
			<n-table v-if="keyCounts" striped>
				<thead>
					<tr>
						<th>Keywords</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(keyword, index) in keywords" :key="`k_${index}`">
						<td>{{keyword}}</td>
					</tr>
				</tbody>
			</n-table>
		</n-space>	
		<div v-if="keyCounts==0" class="flex justify-center">
			<n-alert type="warning" class="max-w-md">
				Non è stata effettuata nessuna ricerca.
			</n-alert>
		</div>
		<n-button round ghost type="primary" @click="clearHistory" class="my-8">
			Cancella cronologia
		</n-button>
	</div>
</template>

<script setup>
// components
import { onMounted, ref } from 'vue';
import { NTable, NSpace, NH1, NText, NAlert, NButton } from 'naive-ui';

// store
import { store } from '../store/store';

const keyCounts = ref(0);
const keywords = ref([]);

const props = defineProps({
	title: { type: String, required: true }
});

const clearHistory = () => {
	console.log("clearHistory", store.searchedKeywords);
	store.clearKeywords();
	keywords.value = [];
	keyCounts.value = 0;
};

onMounted(() => {
	keyCounts.value = store.searchedKeywords.length;
	keywords.value = store.searchedKeywords;
});

</script>
