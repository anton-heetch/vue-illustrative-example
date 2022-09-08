import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Authorisation from './views/Authorisation.vue'
import Registration from './views/Registration.vue'
import Main from './views/Main.vue'
import { createPinia } from 'pinia'
import { useAuthStatus } from './hooks/useAuthStatus'

const pinia = createPinia()

const routes = [
	{ path: '/', component: Main },
	{ path: '/authorisation', component: Authorisation },
	{ path: '/registration', component: Registration },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from) => {
	if (!useAuthStatus() && to.path !== '/authorisation')
		return { path: '/authorisation' }
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
