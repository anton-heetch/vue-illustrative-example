import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Authorisation from './views/Authorisation.vue'
import Registration from './views/Registration.vue'

const routes = [
	{ path: '/', component: Authorisation },
	{ path: '/registration', component: Registration },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
