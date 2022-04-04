
import { createRouter, createWebHistory } from 'vue-router'

import Search from '@/pages/Search.vue' // importante indicare il .vue finale per vite
import History from '@/pages/History.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
	{	path: '/', name: 'Search', component: Search },
	{	path: '/history', name: 'History', component: History },
	{ path: '/:pathMatch(.*)*', name: '404', component: NotFound },
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;