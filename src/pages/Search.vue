<template>
	<div class="gap-4 overflow-hidden">
		<div class="flex items-center justify-center py-8">
			<SearchGithub title="Cerca utente" :loading="loading" @queryUpdated="search" />
		</div>
		
		<div v-if="users" class="gap-4 flex flex-wrap justify-center p-4">
			<CardsUsers :users="users" />
		</div>
	</div>

	<div v-if="error && !loading" class="flex justify-center">
		<n-alert type="error" class="max-w-md">
			{{message}}
		</n-alert>
	</div>
</template>

<script setup>
/* eslint-disable */
// components
import { NAlert } from 'naive-ui';
import SearchGithub from '../components/SearchGithub.vue';
import CardsUsers from '../components/CardsUsers.vue';

// Store
import { useStore } from 'vuex';

import { ref } from "vue";

const loading = ref(false);
const error = ref(false);
const message = ref("");	
const users = ref([]);
const store = useStore();

const search = async (query) => {
	loading.value = true;
	const queryString = query;
	if(queryString.length > 0) {
		store.commit("addKeyword", queryString);
		await getUsers(queryString);
		error.value = false;
		if(users.value && users.value.length === 0) {
			error.value = true;
			message.value = "Nessun utente trovato";
		}
	} 
	else {
		users.value = [];
		error.value = true;
		message.value = "Inserisci almeno un carattere";
	}
	loading.value = false;
};

/**
 * Get users from github API
 * @param {String} queryString 
 */
const getUsers = async (queryString) => {
	try{
		return await fetch(`https://api.github.com/search/users?q=${queryString}`)
			.then(response => response.json())
			.then(data => {
				users.value = data.items;
			});
	} catch(error) {
		error.value=true;
		message.value = "Errore nella richiesta";
		console.error(error);
	}
}
</script>
