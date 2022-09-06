import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Authorisation from './views/Authorisation.vue'
import Registration from './views/Registration.vue'
import Main from './views/Main.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

const routes = [
	{ path: '/', component: Authorisation },
	{ path: '/registration', component: Registration },
	{ path: '/main', component: Main },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
