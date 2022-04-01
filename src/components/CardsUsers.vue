<template>
	<div 
		v-for="user in users" 
		:key="user.id" 
		class="max-w-xs cursor-pointer">
		<a :href="user.html_url" target="_blank">
			<n-card 
				:bordered="false" 
				size="small" 
				class="opacity-40 bg-gray-500 transition duration-300 hover:bg-blue-400 hover:scale-105 hover:opacity-100">
				<div class="flex flex-col gap-2">
					<n-avatar
						round
						size="large"
						:src="user.avatar_url"
						class="w-32 object-contain h-32"
					/>
					<!-- TODO: fix allineamento interno -->
					<n-tag class="cursor-pointer text-center">{{user.login}}</n-tag>
				</div>
			</n-card>
		</a>
	</div>
</template>

<script setup>
// components
import { NCard, NAvatar, NTag } from 'naive-ui';

const props = defineProps({
	users: { type: Object, required: true }
});
</script>