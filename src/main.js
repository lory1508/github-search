import { createApp } from 'vue'

import App from './App.vue'
import './index.css'

// General Font
import 'vfonts/Lato.css'
// Monospace Font
import 'vfonts/FiraCode.css'
// then it works

import router from '@/router'
// import store from '@/store'

import { createStore } from "vuex";

const store = createStore({
	state: {
		keywords: [],
	},
	getters: {
		keywords: state => state.keywords,
	},
	mutations: {
		addKeyword(state, keyword) {
			state.keywords.push(keyword);
		},
		clearKeywords(state) {
			state.keywords = [];
		}
	}
});

createApp(App)
.use(router)
.use(store)
.mount('#app')
