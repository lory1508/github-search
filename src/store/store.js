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

export default store;
