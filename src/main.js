import { createApp } from 'vue'

import App from './App.vue'
import './index.css'
import store from './store/store.js'

// General Font
import 'vfonts/Lato.css'
// Monospace Font
import 'vfonts/FiraCode.css'
// then it works

import router from '@/router'

createApp(App)
.use(router)
.use(store)
.mount('#app')
