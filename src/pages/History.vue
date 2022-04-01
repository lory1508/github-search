<template>
	<div class="mx-40 my-20">
		<n-h1>
			<n-text type="primary">
				Cronologia ricerche
			</n-text>
		</n-h1>
		<n-space vertical>
			<n-data-table :columns="columns" :data="data" striped />
		</n-space>	
		<n-button round ghost type="primary" @click="clearHistory" class="my-8">
			Cancella cronologia
		</n-button>
	</div>
</template>

<script setup>
// components
import { onMounted, ref } from 'vue';
import { NSpace, NH1, NText, NAlert, NButton, NDataTable } from 'naive-ui';

// store
import { useStore } from 'vuex';

const keyCounts = ref(0);
const keywords = ref([]);
const data = ref([]);
const columns = ref([]);
const store = useStore();

const createData = () => {
	keywords.value.forEach(element => {
		data.value.push({
			keyword: element
		});
	});
};

const createCols = () => {
	return [
    {
      title: 'Keywords',
      key: 'keyword'
    }
  ]
};

const clearHistory = () => {
	store.commit("clearKeywords");
	data.value = [];
	keyCounts.value = 0;
};

onMounted(() => {
	keywords.value = store.getters.keywords;
	keyCounts.value = keywords.value.length;
	createData();
	columns.value = createCols();
});

</script>
