
import { createRouter, createWebHistory } from 'vue-router'

import Search from '@/pages/Search.vue' // importante indicare il .vue finale per vite
import History from '@/pages/History.vue'

const routes = [
	{	path: '/', name: 'Search', component: Search },
	{	path: '/history', name: 'History', component: History },
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;